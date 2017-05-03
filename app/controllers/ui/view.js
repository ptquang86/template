var args = $.args;

init();
function init() {
	var exclude = ['id', 'children'];
	$.container.applyProperties(_.omit(args, exclude));
}

function toggleAI(visible) {
  	if (visible) {
		$.ai.height = Titanium.UI.SIZE;
		$.ai.top = 20;
		$.ai.show();
	} else {
		$.ai.hide();
		$.ai.height = 0;
		$.ai.top = 0;
	}
}
exports.toggleAI = toggleAI;

exports.load = function() {
    toggleAI(false);
};

exports.unload = function() {

};
