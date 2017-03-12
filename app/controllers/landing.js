// var args = $.args;

exports.load = function() {
    loadPaging();
};

exports.unload = function() {
    unloadPaging();
};

function goBack() {
    Alloy.Globals.WinManager.loadPrevious();
}

// ==

function loadPaging() {
    $.paging.load($, {
		classes: 'slider',
		scrollableView: $.slider
	});
}

function unloadPaging() {
    $.paging.unload();
}

// ==

function loginFacebook() {
    alert('TODO: loginFacebook');
}

function loginPhone() {
    alert('TODO: loginPhone');
}
