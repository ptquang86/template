var args = $.args;

init();
function init() {
	var exclude = ['id', 'children'];
	$.lv.applyProperties(_.omit(args, exclude));
}

exports.load = function(data) {
	$.collection.reset(data);
    toggleAI(false);
};

exports.unload = function() {
	$.destroy();
};

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

function doFilter(collection) {
	if (0) {
		// return collection.where({ is_selected: 1 });
		return collection.filter(function(model, index, o) {
	      	return model.get('is_selected') == 1 || model.get('is_purchased') == 1;
	    });
	} else {
	    return collection.models;
	}
}

function doTransform(model) {
	var o = model.toJSON();
	// o.template = 'template';
	return o;
}

function lvClick(e) {
	var item = $.collection.get(e.itemId);
	item && $.trigger('click', item.toJSON());
}
