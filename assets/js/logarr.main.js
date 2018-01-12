
function blockUI() {
    $.blockUI({
        css: {
            'border': '5px solid #FFFFFF',
            'padding': '15px',
            'backgroundColor': '#000000',
            'opacity': '0.9',
            'color': '#FFFFFF',
            'font-size': '40px',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
        },
        message: 'Searching...',
    });
    setTimeout(function () {
        highlight();
        count()
        $.unblockUI()
    }, 200);
}; 


function highlight() {
    var text = document.getElementById("text-search").value;
    var query = new RegExp("(\\b" + text + "\\b)", "gim");
    var e = document.getElementById("logcontainer").innerHTML;
    var enew = e.replace(/(<span>|<\/span>)/igm, "");
    var newe = enew.replace(query, "<span>$1</span>");
    document.getElementById("logcontainer").innerHTML = newe;
    color = "#f6f";
};


function count() {
    var count =
    $("#logcontainer span").length;
    $(".count").text(count).append(" occurance(s) of searched term");
};


function refreshblockUI() {
    $.growlUI('Updating Logs...');
    setTimeout(function () {
        refresh()
    }, 300);
}; 


function refresh() {
    var url = 'index.php';
    $('#logwrapper').load(url + ' #logs');
}; 

