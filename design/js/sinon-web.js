/**
 * @depend shjs/shjs.js
 */
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-236272-6"]);
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
}());