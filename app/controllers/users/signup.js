var args = $.args;

exports.load = function() {
    $.txtName.value = args.name;
    $.txtEmail.value = args.email;
    $.txtPhone.value = args.phone;
};

function goBack() {
    Alloy.Globals.WinManager.loadPrevious();
}

// ==

function txtReturn(e) {
    var txt = { 
        txtName: 'txtEmail', 
        txtEmail: 'txtPhone', 
        txtPhone: 'txtPassword'
    }[e.id];
    txt && $[txt].focus();
}

function createAccount() {
    var name = $.txtName.value,
        email = $.txtEmail.value,
        phone = $.txtPhone.value,
        password = $.txtPassword.value;
        
    if (1) {
        
    } else {
        $.button.toggleAI(false);
    } 
}
