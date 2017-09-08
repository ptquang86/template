var args = $.args;

init();
function init() {
	var exclude = ['id', 'children', 'title'];
	$.container.applyProperties(_.omit(args, exclude));
	
	args.title && ($.btn.title = args.title);
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
