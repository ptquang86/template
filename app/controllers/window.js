var args = $.args;

exports.load = function() {
    getData();
};

exports.unload = function() {
    unloadData();
};

function goBack() {
    Alloy.Globals.WinManager.loadPrevious();
}

function addProfile() {
    alert('TODO: addProfile');
}

// ==

function getData() {
    $.lv.toggleAI(true);
    setTimeout(loadData, 3000);
}

function loadData() {
    var data = [];
    for (var i = 0, ii = 10; i < ii; i++) {
        data.push({
            id: i,
            icon: 'http://lorempixel.com/72/72/',
            title: 'title',
            subtitle: 'subtitle'
        });
    }
    $.lv.load(data);
}

function unloadData() {
    $.lv.unload();
}

function lvClick(e) {
    Ti.API.error("TODO: lvClick " + JSON.stringify( e ));
}
