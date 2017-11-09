var args = $.args;

init();
function init() {
	var exclude = ['id', 'children', 'data', 'paddingBottom', 'title', 'titleid', 'Button'];
	$.container.applyProperties(_.omit(args, exclude));
	
	args.Button && $.btn.applyProperties(args.Button);
	(args.paddingBottom) && ($.btn.bottom = args.paddingBottom);

	args.title && ($.btn.title = args.title);
	args.titleid && ($.btn.title = L(args.titleid));
}

function toggleAI(visible) {
  	if (visible) {
		$.btn.visible = false;
		$.ai.show();
	} else {
		$.ai.hide();
		$.btn.visible = true;
	}
}
exports.toggleAI = toggleAI;

function btnClick(e) {
	toggleAI(true);
	$.trigger('click', { id: args.id, data: args.data });
}

// == TITLE

function getTitle() {
	return $.btn.title;
}

function setTitle(value) {
	$.btn.title = value;
}

Object.defineProperty($, 'title', {
    get: function() {
        return getTitle();
    },
    set: function(value) {
        return setTitle(value);
    }
});

// == ENABLED

function getEnabled() {
	return $.btn.enabled;
}

function setEnabled(value) {
	$.btn.enabled = value;
	$.container.opacity = value ? 1 : 0.5;
}

Object.defineProperty($, 'enabled', {
    get: function() {
        return getEnabled();
    },
    set: function(value) {
        return setEnabled(value);
    }
});
