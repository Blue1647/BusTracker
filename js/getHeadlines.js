$(document).ready(
    function () {
        getHLs();
        setInterval("getHLs()", 21600000);
    }
)

function getHLs() {
    $.ajax({
        url: "http://api.nytimes.com/svc/topstories/v1/home.json?api-key=12b3c10727f9a45375d342ed28c48176:11:72542931",
        type: "GET",
        dataType: "text",
        success: function (data) {
            var json = $.parseJSON(data);
            var numofHLs = json.num_results;
            for (i = 0; i < numofHLs; i++) {
                var hl = json.results[i].title;
                var abs = json.results[i].abstract
                console.log(hl + ": " + abs);
                $(".hls").append("<b class = \"hl\">" + hl + "</b>" + ": " + abs + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;" + "&nbsp;");
            }

        }
    });
}
