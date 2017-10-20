var args = $.args;

init();
function init() {
	var exclude = ['id', 'children', 'title', 'titleid', 'Button'];
	$.container.applyProperties(_.omit(args, exclude));
	
	args.Button && $.btn.applyProperties(args.Button);
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
	$.trigger('click');
}

// == TITLE

function getTitle(value) {
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
