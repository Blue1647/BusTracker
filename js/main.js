$(document).ready(
    function () {
        $(".weatherPanels").hide();
        $(".busPanels").hide();
        $(".socialPanels").hide();
        loadPanels();
        setInterval("loadPanels()", 30000);
    }
)

function loadBusPanels() {
    $(".busPanels").fadeIn("slow");
}

function hideBusPanels() {
    $(".busPanels").fadeOut("slow");
}

function loadWeatherPanels() {
    $(".weatherPanels").fadeIn("slow");
}

function hideWeatherPanels() {
    $(".weatherPanels").fadeOut("slow");
}
function loadSocialPanels() {
    $(".socialPanels").fadeIn("slow");
}

function hideSocialPanels() {
    $(".socialPanels").fadeOut("slow");
}

function loadPanels() {
    loadWeatherPanels();
    setTimeout(function () {
        $(".busPanels").hide();
        //$(".socialPanels").hide();
        loadWeatherPanels();
    }, 15000);
    setTimeout(function () {
        $(".weatherPanels").hide();
        $(".busPanels").hide();
        loadSocialPanels();
    }, 30000);
    setTimeout(function () {
        $(".socialPanels").hide();
        $(".weatherPanels").hide();
        loadBusPanels();
    }, 15000);
}
