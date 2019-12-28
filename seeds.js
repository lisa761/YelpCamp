 var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest",
		image: "https://pixabay.com/get/57e1d3404e53a514f6da8c7dda793f7f1636dfe2564c704c722b7ed09345c250_340.jpg",
		description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 a (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lore, comes from a line in section 1.10.32."
	},	
	{
		name: "Desert Mesa",
		image: "https://pixabay.com/get/57e8dc414e5ba814f6da8c7dda793f7f1636dfe2564c704c722b7ed09345c250_340.jpg",
		description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem, comes from a line in section 1.10.32."
	},
	{
		name: "Canyon Floor",
		image: "https://pixabay.com/get/55e7d24a485aac14f6da8c7dda793f7f1636dfe2564c704c722b7ed09345c250_340.jpg",
		description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 an (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem comes from a line in section 1.10.32."
	}
];

function seedDB() {
	// Remove all campgrounds
	Campground.deleteMany({}, function(err, campground) {
		if(err) {
			console.log(err);
		} else {
			console.log("Removed all campgrounds!");
			// Add a few campgrounds
			data.forEach(function(seed) {
				Campground.create(seed, function(err, campg) {
					if(err) {
						console.log(err);
					} else {
						console.log("Added a campground");
						// create a comment
						Comment.create({
							text: "This place is great, but I wish there was internet",
							author: "Homer"
						}, function(err, comment) {
							if(err) {
								console.log(err);
							} else {
								campg.comments.push(comment);
								campg.save();
								console.log("Created a comment");
							}
						});
					}
				});
			});
		}
	});
	// Add a few comments
}

module.exports = seedDB;
