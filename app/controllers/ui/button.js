var args = $.args;

init();
function init() {
	var exclude = ['id', 'children', 'title', 'titleid'];
	$.container.applyProperties(_.omit(args, exclude));
	
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
