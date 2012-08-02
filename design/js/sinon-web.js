/**
 * @depend shjs/shjs.js
 */
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-20456066-1"]);
_gaq.push(["_trackPageview"]);

(function() {
    var ga = document.createElement("script");
    ga.type = "text/javascript";
    ga.async = true;
    ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(ga, s);
})();

try {
    cj.highlight("/design/js/shjs/");
} catch (e) {}

(function () {
    // Examples
    var examples = document.getElementById("examples");

    if (!examples) {
        return;
    }

    var lis = examples.getElementsByTagName("li"), a, code, previous, previousLink;

    for (var i = 0, l = lis.length; i < l; ++i) {
        a = lis[i].getElementsByTagName("a")[0];

        a.onclick = function () {
            if (previousLink) {
                previousLink.className = "";
            }

            if (previous && previous.style) {
                previous.style.display = "none";
            }

            try {
                previous = document.getElementById(this.href.split("#")[1]);

                if (previous) {
                    previous.style.display = "block";
                }
            } catch (e) {}

            previousLink = this.parentNode;
            previousLink.className = "active";
            this.blur();
            return false;
        };

        code = document.getElementById(a.href.split("#")[1]);

        if (i != 0) {
            if (code) {
                code.style.display = "none";
            }
        } else {
            previous = code;
            previousLink = a.parentNode;
        }
    }

/*
    // Tweets
    function getTweetsElement(num) {
	var element = document.getElementById("tweets");

        if (!element) {
            return null;
        }

	var heading = document.createElement("h2");
	heading.innerHTML = num + " tweet" + (num > 1 ? "s" : "");
	element.appendChild(heading);
	var tweets = document.createElement("ol");
	element.appendChild(tweets);

	return tweets;
    }

    function autoLinkTweeps(text) {
	return text.replace(/\@([a-zA-Z0-9\-_]+)/g, function (match, user) {
	    return "<a href=\"http://twitter.com/" + user + "\">" +
		match + "</a>";
	});
    }

    function autoLink(text) {
	return text.replace(/(http:\/\/[\w\.\d%\/]+)/ig, '<a href="$1">$1</a>');
    }

    function tweets (json) {
        var element = document.getElementById("tweets");

        if (!element) {
            return;
        }

	var results = json && json.response && json.response.list;

	if (typeof results !== "undefined") {
	    var length = results.length;
	    var current, currentAuthor, tweet, tweets = "", link;

	    for (var i = length - 1; i >= 0; i--) {
		current = results[i];
		currentAuthor = current.author;
		link = "<a href=\"" + currentAuthor.url + "\">";
		tweet = "<li class=\"comment tweet\"><div class=\"vcard\">";
		tweet += "<h3>" + link + "@" + currentAuthor.nick + "</a> (" + currentAuthor.name + ")</h3>";
		tweet += "<p><a href=\"" + current.permalink_url + "\">" + current.date_alpha + "</a></p></div>"
		tweet += "<div class=\"image\">" + link + "<img src=\"" + currentAuthor.photo_url +
		    "\" alt=\"\" width=\"40\" height=\"40\" /></a></div>"
		tweet += "<div class=\"entry-content\">" + autoLinkTweeps(autoLink(current.content)) + "</div>";
		tweets += tweet;
	    }

	    getTweetsElement(length).innerHTML = tweets + "</ol>";
	}
    }

    this.tweets = tweets;
*/
}());