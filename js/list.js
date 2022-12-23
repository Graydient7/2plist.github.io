const d = {
	"list": [
		{
			// The position of a level on the list. The actual webpage will start at 0
			// and not skip any numbers, but these keys are just used for sorting the
			// list, so you can do -2, 4, and 8, and the demonlist will sort them as 1,
			// 2, and 3.
			"key": 1,

			// Was the level hacked or not? If true, the page will not display a video,
			// and "HACKED" will be shown next to the level name.
			"hacked": false,

			// The video on the homepage containing the verification (or, in the case of
			// this demonlist, the first one-player completion. It can be a full link
			// (https://www.youtube.com/watch?v=dQw4w9WgXcQ), a video ID (dQw4w9WgXcQ),
			// or a shortened URL (https://youtu.be/dQw4w9WgXcQ). If this is null or "",
			// the video will not display on the demonlist. (This is also the case if
			// hacked is set to true.)
			"verificationVid": "dQw4w9WgXcQ",

			// The name of the level.
			"name": "Level Name",

			// The ID of the level.
			"id": "12345678",

			// The creator(s) of the level.
			"author": "DigitalZero and more",

			// The description of the level.
			"desc": "Bagn Gagn",

			// Whether the level requires a handcam or not.
			"handcam": true,

			// The percentage needed for a record to qualify. This doesn't have any
			// functional use, so it may be a string and thus hold any arbitrary value.
			"percentToQualify": "55",

			// A list of records. An example record is provided.
			"vids": [
				{
					// The percentage of the record. This does have a practical usage, and thus
					// it must not be a string and therefore it must not be in quotes.
					"percent": 56,

					// A link to the record. MUST be an HTTPS link.
					"link": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",

					// The record creator.
					"user": "Graydient7",
				},
			],
		},
	],

	// The current version of the list. [x, y, z] is x.y.z.
	"version": [1, 0, 0],
};

const list = d.list;
const version = d.version;
