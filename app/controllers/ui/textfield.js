/*
<Require id="txtEmail" class="txt" src="/ui/textfield" 
	TextFieldEvents="change,return" onChange="txtEmailChange" onReturn="txtEmailReturn"/>

"#txtEmail": { 
	height: 42,
	Border: {
		height: 1,
		bottom: 0,
		backgroundColor: '#646464'
	},
	TextField: { 
		hintText: L('add_email'),
		keyboardType: Titanium.UI.KEYBOARD_TYPE_EMAIL, 
		returnKeyType: Titanium.UI.RETURNKEY_NEXT,
	} 
}
	
args = {
	id: 'txtEmail',
	Border: {
		height: 1,
		bottom: 0,
		backgroundColor: '#646464'
	},
	TextField: { 
		hintText: L('add_email'),
		keyboardType: Titanium.UI.KEYBOARD_TYPE_EMAIL, 
		returnKeyType: Titanium.UI.RETURNKEY_NEXT,
		value: 'abc'
	},
	TextFieldEvents: 'change,return'
}
*/
var args = $.args;

init();
function init() {
	var exclude = ['id', 'children', 'Border', 'TextField', 'TextFieldEvents'];
	$.container.applyProperties(_.omit(args, exclude));
	
	args.Border && $.border.applyProperties(args.Border);
	args.TextField && $.txt.applyProperties(args.TextField);
	
	// events
	var TextFieldEvents = args.TextFieldEvents;
	if (TextFieldEvents) {
		var events = TextFieldEvents.split(',');
		var eventMapping = { 'change': txtChange, 'return': txtReturn };
		for (var i = 0, ii = events.length; i < ii; i++) {
			var e = events[i],
				fnc = eventMapping[e];
			fnc && $.txt.addEventListener(e, eventMapping[e]);
		}
	}
}

function getValue(value) {
	return $.txt.value;
}

function setValue(value) {
	$.txt.value = value;
}

Object.defineProperty($, 'value', {
    get: function() {
        return getValue();
    },
    set: function(value) {
        return setValue(value);
    }
});

function txtChange(e) {
	$.trigger('change', { id: args.id, value: getValue() });
}

function txtReturn(e) {
	$.trigger('return', { id: args.id, value: getValue() });
}

exports.blur = function() {
	$.txt.blur();
};

exports.focus = function() {
	$.txt.focus();
};
