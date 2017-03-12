init();

function init() {
    var oWindowManager = require('managers/window'),
        winManager = new oWindowManager();
    OS_ANDROID && winManager.on('window:exit', exitConfirm);
    Alloy.Globals.WinManager = winManager;

    // load UI
    if (0) {
        Alloy.Globals.WinManager.load({
            url: 'window',
            reset: true
        });
    } else {
        Alloy.Globals.WinManager.load({
            url: 'landing',
            reset: true
        });
    }
};

function exitConfirm() {
    Alloy.Globals.WinManager.exit();
    /*
    var dialog = Ti.UI.createAlertDialog({
        cancel: 0,
        buttonNames: ['NO', 'YES'],
        title: 'Quit?',
        message: 'Are you sure?',
    });
    dialog.addEventListener('click', function(e) {
        if (e.index !== e.source.cancel) {
            Alloy.Globals.WinManager.exit();
        }
    });
    dialog.show();
	*/
}
