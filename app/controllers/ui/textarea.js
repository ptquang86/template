/*
<Require id="txtMessage" class="txt" src="/ui/textarea" 
	TextAreaEvents="change,return" onChange="txtMessageChange" onReturn="txtMessageReturn"/>

"#txtMessage": { 
	height: 78,
	Border: {
		height: 1,
		bottom: 0,
		backgroundColor: '#646464'
	},
	Hint: {
		color: '#777'
	},
	TextArea: { 
		hintText: L('add_message'),
		value: 'abc'
	}
}
	
args = {
	id: 'txtMessage',
	Border: {
		height: 1,
		bottom: 0,
		backgroundColor: '#646464'
	},
	Hint: {
		color: '#777'
	},
	TextArea: { 
		hintText: L('add_message'),
		value: 'abc'
	},
	TextAreaEvents: 'change,return'
}
*/
var args = $.args;
var events = [];

init();
function init() {
	var exclude = ['id', 'children', 'value', 'Border', 'Hint', 'TextArea', 'TextAreaEvents'];
	$.container.applyProperties(_.omit(args, exclude));

	args.Border && $.border.applyProperties(args.Border);
	if (args.Hint) {
		if (OS_IOS) {
			$.hint.applyProperties(args.Hint);
		} else {
			args.Hint.color && ($.txt.hintTextColor = args.Hint.color);
		}
	}
	if (args.TextArea) {
		$.txt.applyProperties(args.TextArea);
		if (OS_IOS && args.TextArea.hintText) {
			$.hint.text = args.TextArea.hintText;
		}
	}
	
	args.value && setValue(args.value);

	// events
	var TextAreaEvents = args.TextAreaEvents;
	if (TextAreaEvents) {
		events = TextAreaEvents.split(',');
		var eventMapping = {  };
		for (var i = 0, ii = events.length; i < ii; i++) {
			var e = events[i],
				fnc = eventMapping[e];
			fnc && $.txt.addEventListener(e, eventMapping[e]);
		}
	}
}

function getValue() {
	return $.txt.value;
}

function setValue(value) {
	$.txt.value = value;

	// toggle hint text
	toggleHint( value.length <= 0 );
}

Object.defineProperty($, 'value', {
    get: function() {
        return getValue();
    },
    set: function(value) {
        return setValue(value);
    }
});

function toggleHint(visible) {
	OS_IOS && $.hint[ visible ? 'show' : 'hide' ]();
}

function txtChange(e) {
	var value = getValue();
	
	// toggle hint text
	toggleHint( value.length <= 0 );
	
	if (events.indexOf('change') != -1) {
		$.trigger('change', { id: args.id, value: value });
	}
}

function txtReturn(e) {
	hideKeyboard();
	
	if (events.indexOf('return') != -1) {
		$.trigger('return', { id: args.id, value: getValue() });
	}
}

function hideKeyboard() {
	$.txt.blur();
};
exports.blur = hideKeyboard;

function showKeyboard() {
	$.txt.focus();
};
exports.focus = showKeyboard;
