L.Control.LayerSwitcher = L.Control.extend({
	options: {
		
	},
	
	showLayer: function(layerId) {
		smap.core.layerInst.showLayer(layerId);
	},
	
	hideLayer: function(layerId) {
		smap.core.layerInst.hideLayer(layerId);
	},

	initialize: function(options) {
		L.setOptions(this, options);
	},

	onAdd: function(map) {
		this.map = map;
		
		this._container = L.DomUtil.create('div', 'leaflet-control-LayerSwitcher'); // second parameter is class name
		L.DomEvent.disableClickPropagation(this._container);
		
		this.$container = $(this._container);
		
		this._addPanel();
		this._addLayers(smap.config.bl, smap.config.ol);
		this._addBtn();
		this._bindEvents();
		this.showPanel();
		
		$("#mapdiv").addClass("lswitch-panelslide");

		return this._container;
	},

	onRemove: function(map) {
		// Do everything "opposite" of onAdd – e.g. unbind events and destroy things
		// map.off('layeradd', this._onLayerAdd).off('layerremove', this._onLayerRemove);
	},
	
	_addLayers: function(bls, ols) {
		bls = bls || [];
		ols = ols || [];
		
		var t;
		for (var i=0,len=bls.length; i<len; i++) {
			t = bls[i];
			this._addRow({
				displayName: t.options.displayName,
				layerId: t.options.layerId,
				isBaseLayer: true
			});
		}
		for (var i=0,len=ols.length; i<len; i++) {
			t = ols[i];
			this._addRow({
				displayName: t.options.displayName,
				layerId: t.options.layerId,
				isBaseLayer: false
			});
		}
	},
	
	_onApplyParams: function(e) {
		if (e.BL) {
//			var t = smap.cmd.getLayerConfig( e.BL );
			var theId = this._makeId(e.BL);			
		}
		else {
			var theId = smap.config.bl[0].layerId;
		}
		$("#lswitch-blcont").find( "#"+theId ).addClass("active");
	},
	
	_bindEvents: function() {
		var self = this;
		
		$("#mapdiv").on("touchstart click", $.proxy(function() {
			this.hidePanel();
			return false;
		}, this));
		
		smap.event.on("smap.core.applyparams", $.proxy(this._onApplyParams, this));
		
//		this.map.on("layeradd layerremove", function(e) {
//			var layerId = e.layer.options.layerId;
//			if (layerId) {
//				var theId = self._makeId(layerId);
//				$("#"+theId).toggleClass("active");
//			}
//		});
	},
	
	_addBtn: function() {
		var btn = $('<div id="lswitch-btn"><img class="glyphicon" src="img/glyphicons_113_justify_lsw.png"></img></div>');
		$("#mapdiv").prepend(btn);
		btn.on("touchstart mousedown", $.proxy(function() {
			this.showPanel();
			return false;
		}, this));
	},
	
	_addPanel: function() {
		this.$panel = $('<div class="lswitch-panel" />');
		this.$panel.swipeleft($.proxy(function() {  
			this.hidePanel();
		}, this));
		this.$list = $(
			'<div class="panel panel-default">'+
//				'<div class="panel-heading">Baselayers</div>'+
				'<div id="lswitch-blcont" class="list-group"></div>'+
			'</div>'+
			'<div class="panel panel-default">'+
//				'<div class="panel-heading">Overlays</div>'+
				'<div id="lswitch-olcont" class="list-group"></div>'+
			'</div>');
		this.$panel.append(this.$list);
		$("body").append( this.$panel );
	},
	
	showPanel: function() {
		$("body").css("overflow", "hidden"); // To avoid scroll bars
		this.$panel.show();
		$("#mapdiv").css({
			"margin-left": this.$panel.outerWidth() + "px"
		});
		
		setTimeout(function() {
			$("#lswitch-btn").hide();
		}, 300);
	},
	
	hidePanel: function() {
		$("body").css("overflow", "auto"); // restore overflow
		$("#mapdiv").css({
			"margin-left": "0px"
		});
		setTimeout($.proxy(function() {
			this.$panel.hide();
			$("#lswitch-btn").show();
		}, this), 300);
	},
	
	_onRowTap: function(e) {
		
		var tag = $(e.target);
		tag.toggleClass("active");
		var theId = tag.attr("id");
		var layerId = this._unMakeId(theId);
		if ( tag.hasClass("active") ) {
			// Show layer
			this.showLayer(layerId);
		}
		else {
			// Hide layer
			this.hideLayer(layerId);	
		}
		return false;
	},
	
	_makeId: function(layerId) {
		return "lswitchrow-" + encodeURIComponent(layerId).replace(/%/g, "--pr--");
	},
	_unMakeId: function(theId) {
		return decodeURIComponent( theId.replace("lswitchrow-", "").replace(/--pr--/g, "%") );
	},
	
	_addRow: function(t) {
		var row = $('<a class="list-group-item">'+t.displayName+'</a>');
		row.attr("id", this._makeId(t.layerId));
		row.on("tap", $.proxy(this._onRowTap, this));
		
		var parentTag;
		if (t.isBaseLayer) {
			parentTag = $("#lswitch-blcont");
		}
		else {
			parentTag = $("#lswitch-olcont");
		}
		parentTag.append(row);
	}
});


// Do something when the map initializes (example taken from Leaflet attribution control)

//L.Map.addInitHook(function () {
//	if (this.options.attributionControl) {
//		this.attributionControl = (new L.Control.LayerSwitcher()).addTo(this);
//	}
//});


/*
 * This code just makes removes the need for
 * using "new" when instantiating the class. It
 * is a Leaflet convention and should be there.
 */
L.control.layerSwitcher = function (options) {
	return new L.Control.LayerSwitcher(options);
};