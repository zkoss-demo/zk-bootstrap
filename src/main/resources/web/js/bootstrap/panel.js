/* panel-bs.js

	Purpose:
		
	Description:
		
	History:
		Wed, Aug 28, 2013 12:51:51 PM, Created by jumperchen

Copyright (C) 2013 Potix Corporation. All Rights Reserved.
*/
zk.afterLoad('zul.wnd', function () {
	var _panel = {},
		_panelMolds = {};

zk.override(zul.wnd.Panel.molds, _panelMolds, {
	'bs': zul.wnd.Panel.molds['default']
});

zk.override(zul.wnd.Panel.prototype, _panel, {
	_inBSMold: function () {
		return this._mold == 'bs';
	},
	getSclass: function () {
		if (this._inBSMold()) {
			return this._sclass ? this._sclass : 'panel-default';
		} else
			return _panel.getSclass.apply(this, arguments);
	},
	getZclass: function () {
		if (this._inBSMold())
			return this._zclass != null ? this._zclass : 'panel';
		return _panel.getZclass.apply(this, arguments);
	},
	$s: function (subclass) {
		if (this._inBSMold()) {
			switch (subclass) {
			case 'head':
				subclass = 'heading';
				break;
			case 'header':
				return '';
			}
		}
		return _panel.$s.apply(this, arguments);
	}
});

var _panelchildren = {};

zk.override(zul.wnd.Panelchildren.prototype, _panelchildren, {
	_inBSMold: function () {
		return this.parent && this.parent._inBSMold();
	},
	getZclass: function () {
		if (this._inBSMold())
			return this._zclass != null ? this._zclass : '';
		return _panelchildren.getZclass.apply(this, arguments);
	},
	$s: function (subclass) {
		if (this._inBSMold())
			return '';
		return _panelchildren.$s.apply(this, arguments);
	}
});

});