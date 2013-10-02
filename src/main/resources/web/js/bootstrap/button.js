/* button.js

	Purpose:
		
	Description:
		
	History:
		Wed, Aug 28, 2013 12:51:51 PM, Created by jumperchen

Copyright (C) 2013 Potix Corporation. All Rights Reserved.
*/
zk.afterLoad('zul.wgt', function () {
	var _button = {},
		_buttonMolds = {};

zk.override(zul.wgt.Button.molds, _buttonMolds, {
	'bs': zul.wgt.Button.molds['default']
});
	
zk.override(zul.wgt.Button.prototype, _button, {
	_inBSMold: function () {
		return this._mold == 'bs';
	},
	getSclass: function () {
		if (this._inBSMold()) {
			return this._sclass ? this._sclass : 'btn-default';
		} else
			return _button.getSclass.apply(this, arguments);
	},
	getZclass: function () {
		if (this._inBSMold())
			return this._zclass != null ? this._zclass : 'btn';
		return _button.getZclass.apply(this, arguments);
	}
});

});