
L.Path.include(
	{
		toGML: function(){
			var coords,xml = '';

			if (this instanceof L.MultiPolygon) {
				console.log("GML TODO: L.MultiPolygon and L.MultiPolyline"); //MultiPolygon and MultiLineString
			} else if (this instanceof L.Polygon) {
				//Polygon
				xml += '<gml:Polygon srsName="EPSG:4326">';

				coords = this.gmlCoordPairs(this.getLatLngs());
				xml += '<gml:exterior><gml:LinearRing><gml:coordinates cs="," decimal="." ts=" ">';
				xml += coords.join(' ') + ' ' + coords[0];
				xml += '</gml:coordinates></gml:LinearRing></gml:exterior>';
				if (this._holes && this._holes.length) {
					// Deal with holes
					for (var h in this._holes) {
						coords = this.gmlCoordPairs(this._holes[h]);
						xml += '<gml:interior><gml:LinearRing><gml:coordinates>';
						xml += coords.join(' ') + ' ' + coords[0];
						xml += '</gml:coordinates></gml:LinearRing></gml:interior>';
					}
				}

				xml += "</gml:Polygon>";
				return xml;
			} else if (this instanceof L.Polyline) {

				var latLngs = this.getLatLngs();

				var p = OpenLayers.Geometry.Point,
					geomCoords1 = [].concat(this.feature.geometry.coordinates),
					components, coords,
					level = 0,
					latLng,
					arrLineStrings = [],
					arrCoords = [],
					splitWord,
					geom;

				var isMulti = geomCoords1[0][0].length;
				if (isMulti) {
					// -- MultiLineString --
					for (var i=0,len=latLngs.length; i<len; i++) {
						latLng = latLngs[i];
						arrCoords.push( new p(latLng.lng, latLng.lat) );
						// for (var j=0,lenj=geomCoords2.length; j<lenj; j++) {
						// 	coords = geomCoords2[j];
						// 	// coords = utils.projectPoint(coords[0], coords[1], "EPSG:4326", "EPSG:3008");
						// }
					}
					if (arrCoords.length) {
						arrLineStrings.push( new OpenLayers.Geometry.LineString(arrCoords) );
					}
					geom = new OpenLayers.Geometry.MultiLineString(arrLineStrings);
					splitWord = 'gml:MultiLineString';
				}
				else {

					// -- LineString --
					for (var i=0,len=latLngs.length; i<len; i++) {
						latLng = latLngs[i];
						arrCoords.push( new p(latLng.lng, latLng.lat) );
					}
					geom = new OpenLayers.Geometry.LineString(arrCoords);
					splitWord = 'gml:LineString';
				}
				
				var f = new OpenLayers.Feature.Vector(geom);
				var format = new OpenLayers.Format.GML();
				xml = format.write([f]);
				var xmlArr = xml.split(splitWord);
				xml = '<'+splitWord+' srsName="EPSG:4326"'+xmlArr[1]+splitWord+'>'; // 
				return xml;

			} else if (this instanceof L.Circle){
				console.log("GML TODO: L.Circle"); 

				// Note: Geoserver doesn't support circles, need to convert this to a polygon
				//xml += '<gml:Circle srsName="EPSG:4326">';
				//xml += '<gml:pos>115.832 -31.939</gml:pos>';
				//xml += '<gml:radius uom="km">0.5</gml:radius>';
				//xml += '</gml:Circle>';

				//return xml;
			}
		},

		gmlCoordPairs: function(arrLatlng){
			coords = [];
			for(var i = 0;i < arrLatlng.length;i++){
				coords.push(arrLatlng[i].lng + ',' + arrLatlng[i].lat);
			}
			return coords;
		}
	}
);

L.Marker.include({
	toGML: function(){
		var xml;
		xml = '<gml:Point srsName="EPSG:4326"><gml:coordinates cs="," decimal="." ts=" ">';
		xml += this.getLatLng().lng + ',' + this.getLatLng().lat;
		xml += '</gml:coordinates></gml:Point>';
		return xml;
	}
});
