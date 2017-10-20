// var args = $.args;

exports.load = function() {
    loadPaging();
};

exports.unload = function() {
    unloadPaging();
};

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
    Alloy.Globals.WinManager.load({
        url: 'users/signin',
        reset: false
    });
}

function loginPhone() {
    Alloy.Globals.WinManager.load({
        url: 'users/signup',
        reset: false
    });
}
