/* button-bs.js

	Purpose:
		
	Description:
		
	History:
		Wed, Aug 28, 2013 12:51:51 PM, Created by jumperchen

Copyright (C) 2013 Potix Corporation. All Rights Reserved.
*/
zk.afterLoad('zul.menu', function () {
	var _menupopup = {}
		_menupopupMolds = {};

zk.override(zul.menu.Menupopup.molds, _menupopupMolds, {
	'bs': zul.menu.Menupopup.molds['default']
});
	
zk.override(zul.menu.Menupopup.prototype, _menupopup, {
	_inBSMold: function () {
		return this._mold == 'bs';
	},
	getZclass: function () {
		if (this._inBSMold()) {
			return this._zclass ? this._zclass : '';
		} else
			return _menupopup.getZclass.apply(this, arguments);
	},
	$s: function (subclass) {
		if (this._inBSMold()) {
			switch (subclass) {
			case 'separator':
				return '';
			case 'content':
				return 'dropdown-menu';
			}
			return '';
		} else
			return _menupopup.$s.apply(this, arguments);
	},
	open: function () {
		if (this._inBSMold()) {
			this.forcerender();
			jq(this.$n('cave')).css({position: 'relative', display: 'block'});
			_menupopup.open.apply(this, arguments);
		} else 
			return _menupopup.open.apply(this, arguments);
	}
});

var _menuseparator = {};

zk.override(zul.menu.Menuseparator.prototype, _menuseparator, {
	_inBSMold: function () {
		return this.parent && this.parent._inBSMold && this.parent._inBSMold();
	},
	getZclass: function () {
		if (this._inBSMold())
			return this._zclass != null ? this._zclass : 'divider';
		return _menuseparator.getZclass.apply(this, arguments);
	}
});

var _menuitem= {};

zk.override(zul.menu.Menuitem.prototype, _menuitem, {
	_inBSMold: function () {
		return this.parent && this.parent._inBSMold && this.parent._inBSMold();
	},
	getZclass: function () {
		if (this._inBSMold())
			return this._zclass != null ? this._zclass : '';
		return _menuitem.getZclass.apply(this, arguments);
	}
});

});