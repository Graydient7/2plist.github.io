$("#version-node").text("(v" + version[0] + "." + version[1] + "." + version[2] + ")");
list.sort((a, b) => a.key - b.key);

var l = getParameterByName('q', window.location.href) * 1 - 1;
var record_node = $("#records-table")
var list_node = $("#list");

for (var i = 0; i < list.length; i++) {
	var entry = list[i];

	$("<div>")
		.addClass((l == -1 ? (i == 0) : (i == l)) ? 'entry selected' : 'entry')
		.html(`#${i+1}: <strong>${entry.name}</strong> by <em class="author">${entry.author}</em>`)
		.attr('value', i)
		.appendTo(list_node);
}

function load(node) {
	console.log(node);

	var num;

	if (typeof node == 'number') num = node;
	else num = $(node).attr('value');

	console.log(`guh ${num}`);

	var entry = list[num];
	if (!entry) load(0);	

	else {
		if (!entry.hacked && (entry.verificationVid !== null && entry.verificationVid !== "")) {
			entry.verificationVid = entry.verificationVid
				.replace(/www\.youtube.com\/watch\?v=/gi, '')
				.replace(/\/youtu\.be/gi, '')
				.replace(/&t=\d+s/gi, '')
				.replace(/https:\/\//gi, '')
		}

		$("#levelname").html(entry.name + (entry.hacked ? " <span class='hacked'>HACKED</span>" : ""));
		$("#inside-level-author").text(entry.author);

		$("#leveldescription").empty();
		$("#leveldescription").text(entry.desc);

		$("#levelid").empty();
		$("#levelid").text(entry.id);

		$("#levelhandcam").empty();
		$("#levelhandcam").text(entry.handcam ? "does" : "does not");

		$("#levelvid").empty();

		if (!entry.hacked && (entry.verificationVid !== null && entry.verificationVid !== "")) {
			$("#levelvid").html(`<hr><iframe class="vid" height="300" src="https://www.youtube.com/embed/${entry.verificationVid}?rel=0" frameborder="0" allowfullscreen></iframe>`);
		}

		$("#levelqualify").text(entry.percentToQualify);

		$(record_node).empty();
		entry.vids.sort((a, b) => b.percent - a.percent);

		for (var j = 0; j < entry.vids.length; j++) {
			var record = entry.vids[j];
			if (!record.link.includes('https://')) record.link = "https://" + record.link;

			$("<div>")
				.addClass('record-entry')
				.html(`<div class='interentry'><a href="${record.link}"><strong>${record.user}</strong> (<em>${record.percent}%</em>)</div>`)
				.appendTo(record_node);
		}
	}

	cueCSS();
};

$('.entry').click(({target}) => {
	$('.entry').removeClass('selected')
	$(target).addClass('selected');

	load(target);
});

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");

	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
	var results = regex.exec(url);

	if (!results) return null;
	if (!results[2]) return '';

	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

load(l * 1);