var args = $.args;

init();
function init() {
    var exclude = ['id', 'children', 'hintText'];
    var textfields = [
        'autocapitalization', 'autocorrect', 'clearButtonMode',
        'hintTextColor', 'keyboardType', 'passwordMask',
        'returnKeyType', 'softKeyboardOnFocus'
    ];

    for (var key in args) {
        if (args.hasOwnProperty(key)) {
            if (textfields.indexOf(key) != -1) {
                $.txt[key] = args[key];
            } else if (exclude.indexOf(key) == -1) {
                $.container[key] = args[key];
            }
        }
    }

    var hintText = args.hintText;
    if (hintText) {
        if (OS_IOS) {
            $.txt.attributedHintText = Ti.UI.createAttributedString({
                text: hintText,
                attributes: [
                    {
                        type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR,
                        value: args.hintTextColor || '#555',
                        range: [0, hintText.length]
                    }
                ]
            });
        } else {
            $.txt.hintText = hintText;
        }
    }
}

exports.setValue = function(value) {
    $.txt.value = value;
};

exports.getValue = function(value) {
    return $.txt.value;
};

exports.focus = function() {
    $.txt.focus();
};

function txtReturn(e) {
    return $.trigger('return', { id: args.id, value: this.value });
}
