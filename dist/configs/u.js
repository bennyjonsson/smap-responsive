
var config = {

		params:{
			center: [13.0, 55.6],
			zoom: 10,
			hash: false
		},
		
		
		ws: {
			"localhost": {
				proxy: "http://localhost/cgi-bin/proxy.py?url="
			},
			"xyz.malmo.se": {
				proxy: "http://xyz.malmo.se/myproxy/proxy.py?url="
			},
			"mobile.smap.se": {
				proxy: "http://mobile.smap.se/smap-mobile/ws/proxy.py?url="
			},
			"91.123.201.52": {
				proxy: "http://91.123.201.52/cgi-bin/proxy.py?url="
			},
			"kartor.helsingborg.se": {
				proxy: "http://kartor.helsingborg.se/cgi-bin/proxy.py?url="
			}
		},
		
		ol: [
		
			// {
			// 		init: "lvector.AGS",
			// 		options: {
			// 			// setMap: true,
			// 			displayName: "ArcGIS JÃ¶nkÃ¶ping",
			// 			url: "http://ext-geoservices.lansstyrelsen.se/ArcGIS/rest/services/Vektor/Lst_Miljodata/MapServer/2",
			// 			fields: "*",
			// 			uniqueField: "OBJECTID",
			// 			scaleRange: [9, 20],
			// 			layerId: "ArcGIS_Jonkoping",
			// 			attribution: "Stadsbyggnadskontoret, MalmÃ¶",
			// 			singlePopup: true,
 //					showAll: false,
			// 			popupTemplate: '<h2>FiskvÃ¤g - {FiskvTyper}</h2><table><small><tr><td valign="top"><b>Namn:</b></td>\
			// 				<td>{FiskvNamn}</td></tr>\
			// 				<tr><td valign="top"><b>Hindertyp:</b></td><td>{HinderTyp}</td></tr>\
			// 				<tr><td valign="top"><b>Kategori:</b></td><td>{Kategori}</td><tr>\
			// 				<tr><td valign="top"><b>FallhÃ¶jd:</b></td><td>{Fallh_m} m</td><tr>\
			// 				<tr><td valign="top"><b>LÃ¤ngd:</b></td><td>{Langd_m} m</td></tr>\
			// 				<tr><td valign="top"><b>Mer info:</b></td><td><a href="{URL}" target="_blank">L&auml;nk</a></tr>\
			// 				<tr><td><b>Felrapportering: </b></td><td><a href="mailto:atgarderivatten@lansstyrelsen.se?subject=Felrapportering/Komplettering%20fiskv&auml;g:%20{FiskvagID}&body=Beskriv fel eller kompletteringen och bifoga g&auml;rna bilder! %0A%0ATack f%C3%B6r hj&auml;lpen">Fiskv&auml;g: {FiskvagID}</a></tr></small></table>',
			// 			selectable: true
			// 		}
			// },
			
			// ESRI REST RASTER layer

			// ESRI REST RASTER layer
			{
					init: "L.TileLayer.EsriRest",
					url: "http://kartor.malmo.se/arcgis/rest/services/testcache1/MapServer",
					options: {
						layers: "0",
						transparent: true,
						layerId: "blablablablaaa-ol",
						displayName: "Esri-rest-ol",
						opacity: 0.8,
						minZoom: 8,
						maxZoom: 19,
						attribution: '<span>Â© Uffe contributors</span>&nbsp;|&nbsp;<span>Tiles Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png"></span>'
					}
			},
		


			{
					init: "L.TileLayer.EsriRest",
					//url: "http://gis-services.metria.se/arcgis/rest/services/nv/InspireNV_NVR/MapServer",
					url: "http://kartor.malmo.se/arcgis/rest/services/testcache1/MapServer",
					options: {
						layers: "0",
						transparent: true,
						layerId: "lansstyrelsen",
						// http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Portland_Parks/FeatureServer/0
						displayName: "LÃ¤nsstyrelsen-M",
						attribution: "LÃ¤nsstyrelsen",
						popup: '${OBJECTID}',
						uniqueKey: "OBJECTID",
						selectable: true
						// ,
						// style: {
						// 	color: '#00F',
						// 	fillOpacity: 0.3
						// }
					}
			},
			// ESRI REST VECTOR layer
			{
					init: "L.esri.FeatureLayer",
					// url: "http://ext-geoservices.lansstyrelsen.se/ArcGIS/rest/services/Vektor/Lst_Miljodata/MapServer/2",
					url: "http://localhost/cgi-bin/proxy.py?url="+encodeURIComponent("http://ext-geoservices.lansstyrelsen.se/ArcGIS/rest/services/Vektor/Lst_Miljodata/MapServer/2"),
					options: {
						layerId: "Lansstyrelsen",
						displayName: "LÃ¤nsstyrelsen",
						attribution: "Â© LÃ¤nsstyrelsen",
						popup: '${OBJECTID}',
						uniqueKey: "OBJECTID",
						selectable: true
						// ,
						// style: {
						// 	color: '#00F',
						// 	fillOpacity: 0.3
						// }
					}
			},
			// {
			// 		init: "L.esri.FeatureLayer",
			// 		url: "http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Portland_Parks/FeatureServer/0",
			// 		// url: "http://localhost/cgi-bin/proxy.py?url="+encodeURIComponent("http://ext-geoservices.lansstyrelsen.se/ArcGIS/rest/services/Vektor/Lst_Miljodata/MapServer/2"),
			// 		options: {
			// 			layerId: "ArcGIS Portland",
			// 			// http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Portland_Parks/FeatureServer/0
			// 			displayName: "ArcGIS Portland",
			// 			attribution: "Stadsbyggnadskontoret, MalmÃ¶",
			// 			popup: '${OBJECTID}',
			// 			uniqueKey: "OBJECTID",
			// 			selectable: true
			// 			// ,
			// 			// style: {
			// 			// 	color: '#00F',
			// 			// 	fillOpacity: 0.3
			// 			// }
			// 		}
			// },
			{
					init: "L.GeoJSON.WFS",
					url: "http://xyz.malmo.se:8081/geoserver/wfs",
					options: {
						layerId: "stadsdel",
						displayName: "Stadsdel",
						attribution: "Stadsbyggnadskontoret, MalmÃ¶",
						inputCrs: "EPSG:3008",
						reverseAxis: false,
						reverseAxisBbox: true,
						selectable: true,
						popup: '${id}',
						uniqueKey: "gid",
						params: {
							typeName: "malmows:stadsdel",
							version: "1.1.0",
							maxFeatures: 10000,
							format: "text/geojson",
							outputFormat: "json"
						}
						// ,
						// style: {
						// 	color: '#00F',
						// 	fillOpacity: 0.3
						// }
				}
			},
			{
				init: "L.TileLayer.WMS",
				url: "http://193.17.67.229/geos/wms",
				parentTag: "bobyggmiljo",
				options: {
					category: ["Bo bygga & miljÃ¶"],
					layerId: "dp_pagaende",
					displayName: "PÃ¥gÃ¥ende detaljplaner",
					layers: 'dp_pagaende_poly',
					format: 'image/png',
					featureType: "polygon",
					selectable: true,
					transparent: true,
					attribution: "@ Helsingborg stad",
					zIndex: 9
				}
			},

			{
				init: "L.TileLayer.WMS",
				url: "http://193.17.67.229/geos/wms",
				parentTag: "bobyggmiljo",
				options: {
					category: ["Bo bygga & miljÃ¶"],
					layerId: "dp_gallande",
					displayName: "GÃ¤llande detaljplaner",
					layers: 'dp_gallande_poly',
					format: 'image/png',
					featureType: "polygon",
					selectable: true,
					transparent: true,
					attribution: "@ Helsingborg stad",
					zIndex: 9
					
				}
			},

			{
				init: "L.TileLayer.WMS",
				url: "http://193.17.67.229/geos/wms",
				parentTag: "oversiktsplan",
				options: {
					category: ["Ã–versiktsplan 2010"],
					layerId: "fastighet",
					displayName: "Fastighet",
					layers: 'fastighet_polygon',
					format: 'image/png',
					featureType: "polygon",
					selectable: true,
					transparent: true,
					attribution: "@ Helsingborg stad",
					zIndex: 5
				}
			}
		
//			{
//				init: "L.TileLayer.WMS",
//				url: "http://opendata-view.smhi.se/klim-stat_temperatur/wms",
//				options: {
//					layerId: "gangstig",
//					displayName: "GÃ¥ngstig",
//					layers: 'arsmedeltemperatur',
//					format: 'image/png',
//					selectable: true,
//					transparent: true,
//					attribution: "@ MalmÃ¶ Stadsbyggnadskontor"
//				}
//			},
//			{
//				init: "L.TileLayer.WMS",
//				url: "http://xyz.malmo.se:8081/geoserver/gwc/service/wms",
//				options: {
//					layerId: "test",
//					displayName: "Test",
//					layers: 'malmows:smap-mobile-bakgrundskarta',
//					format: 'image/png',
//					selectable: true,
//					transparent: true,
//					attribution: "@ MalmÃ¶ Stadsbyggnadskontor",
//					popup: "<h3>${_displayName}</h3><p>BelÃ¤ggning: ${belaggning}</p><p>${shape_leng}</p>"
//				}
//			},
//			{
//				init: "L.TileLayer.WMS",
//				url: "http://geoserver.smap.se/geoserver/wms",
//				options: {
//					layerId: "cykelvag",
//					displayName: "CykelvÃ¤g",
//					layers: 'malmows:GK_CYKELVAG_L',
//					format: 'image/png',
//					selectable: true,
//					transparent: true,
//					attribution: "@ MalmÃ¶ Stadsbyggnadskontor",
//					popup: "<h3>${_displayName}</h3><p>Typ: ${typ}</p><p>Geom: ${geom}</p>"
//				}
//			},
//			{
//					init: "L.GeoJSON.WFS",
//					url: "http://193.17.67.229/cgi-bin/externt/kkarta/qgis_mapserv.fcgi",
//					options: {
//						layerId: "wfstest_qgis_server",
//						displayName: "ElnÃ¤t Kristianstad",
//						attribution: "Kristianstads WFS",
//						inputCrs: "EPSG:3008",
//						reverseAxis: false,
//						reverseAxisBbox: false,
//						xhrType: "GET",
//						selectable: true,
//						popup: 'agare: ${agare}',
//						uniqueKey: "id",
//						params: {
//							version: "1.0.0"
//							typeName: "c4elnat",
//							format: "text/xml",
//							srs: "EPSG:3008",
//							maxFeatures: 10000,
//							outputFormat: "GeoJSON"
//						},
//						style: {
//							weight: 2,
//							color: '#F00',
//							dashArray: '',
//							opacity: .5
//						}
//					}
//				},
//
//				{
//					init: "L.GeoJSON.WFS",
//					url: "http://localhost/cgi-bin/cultMap/getGeoData.py",
//					options: {
//						layerId: "Kulturlagret",
//						displayName: "Kulturlagret",
//						attribution: "Stadsbyggnadskontoret, MalmÃ¶",
//						inputCrs: "EPSG:4326",
//						reverseAxis: false,
//						reverseAxisBbox: false,
//						selectable: true,
//						popup: '<h4>${txt_name}</h4>',
//						uniqueKey: "id",
//						params: {
//							q: "hembygdsgard"
				// 		typeName: null,
							// version: null,
							// maxFeatures: 10000,
							// format: "text/geojson",
							// outputFormat: "json"
//						},
//						style: {
//							radius: 8,
//							fillColor: "#ff7800",
//							color: "#000",
//							weight: 1,
//							opacity: 1,
//							fillOpacity: 0.8
//						},
//						selectStyle: {
//							radius: 8,
//							fillColor: "#0FF",
//							color: "#0FF",
//							weight: 1,
//							opacity: 1,
//							fillOpacity: 0.5
//						}
//					}
//				},
				,
				{
					init: "L.GeoJSON.WFS",
					url: "http://xyz.malmo.se:8081/geoserver/wfs",
					options: {
						layerId: "busstation",
						displayName: "Busstationer",
						attribution: "Stadsbyggnadskontoret, MalmÃ¶",
						inputCrs: "EPSG:3008",
						reverseAxis: false,
						reverseAxisBbox: true,
						selectable: true,
						popup: '${id}',
						uniqueKey: "id",
						params: {
							typeName: "malmows:busstation",
							version: "1.1.0",
							maxFeatures: 10000,
							format: "text/geojson",
							outputFormat: "json"
						}
						// ,
						// style: {
							// radius: 8,
							// fillColor: "#ff7800",
							// color: "#000",
							// weight: 1,
							// opacity: 1,
							// fillOpacity: 0.8
						// },
						// selectStyle: {
						// 	radius: 8,
						// 	fillColor: "#0FF",
						// 	color: "#0FF",
						// 	weight: 1,
						// 	opacity: 1,
						// 	fillOpacity: 0.5
						// }
					}
				}
//				{
//					init: "L.GeoJSON.WFS",
//					url: "http://xyz.malmo.se:8081/geoserver/wfs",
//					options: {
//						layerId: "stadsdel",
//						displayName: "Stadsdel",
//						attribution: "Stadsbyggnadskontoret, MalmÃ¶",
//						inputCrs: "EPSG:3008",
//						reverseAxis: false,
//						reverseAxisBbox: true,
//						selectable: true,
//						popup: '${id}',
//						uniqueKey: "gid",
//						params: {
//							typeName: "malmows:stadsdel",
//							version: "1.1.0",
//							maxFeatures: 10000,
//							format: "text/geojson",
//							outputFormat: "json"
//						},
						// style: {
						//	color: '#00F',
						//	fillOpacity: 0.3
						// }
//					},
//				},
//			{
//				init: "L.GeoJSON.WFS",
//				url: "http://geoserver.smap.se/geoserver/wfs",
//				options: {
//					layerId: "malmows_STADSDEL_L",
//					displayName: "Stadsdel Linje",
//					attribution: "Stadsbyggnadskontoret, MalmÃ¶",
//					inputCrs: "EPSG:3008",
//					reverseAxis: false,
//					reverseAxisBbox: true,
//					selectable: true,
//					popup: 'The FID: ${fid}',
//					uniqueKey: null,
//					params: {
//						typeName: "malmows:STADSDEL_L",
//						version: "1.1.0",
//						maxFeatures: 10000,
//						format: "text/geojson",
//						outputFormat: "json"
//					},
//					style: {
//						weight: 6,
//						color: '#F00',
//						dashArray: '',
//						opacity: 0.1
//					},
//					selectStyle: {
//						weight: 5,
//						color: '#00FF00',
//						opacity: 1
//					}
//				}
//			},
			//{
			//	init: "L.GeoJSON.WFS",
			//	url: "http://xyz.malmo.se:8081/geoserver/wfs",
			//	options: {
			//		layerId: "stadsdel3d",
			//		displayName: "Stadsdel 3D",
			//		attribution: "Stadsbyggnadskontoret, MalmÃ¶",
			//		inputCrs: "EPSG:4326",
			//		reverseAxis: false,
			//		reverseAxisBbox: true,
			//		selectable: true,
			//		popup: 'The ID: ${id}',
			//		uniqueKey: "id",
			//		params: {
			// 		typeName: "malmows:malmo_kvarter_3d",
						// version: "1.1.0",
						// maxFeatures: 10000,
						// format: "text/geojson",
						// outputFormat: "json"
			// 		}
			// 	}
			//},
//			{
//				 init: "L.GeoJSON.WFS",
//				 url: "http://xyz.malmo.se:8081/geoserver/wfs",
//				 options: {
//					 layerId: "vhamnen_pt",
//					 displayName: "Punkter av intresse",
//					 params: {
//						typeName: "malmows:POI_VHAMN_PT"
//					 },
//					 attribution: "Stadsbyggnadskontoret, MalmÃ¶",
//					 inputCrs: "EPSG:4326",
//					 uniqueKey: "gid",
//					 reverseAxis: false,
//					 reverseAxisBbox: true,
//					 popup: 
//						'<div>${function(p) {'+
//							'var out = "";'+
//							'var style="margin-right:.3em;";'+
//							'if (p.urlvideo) {'+
//								'	out += \'<span style="\'+style+\'" class="fa fa-film fa-2x"></span>\';'+
//								'}'+
//							'if (p.urlsound) {'+
//							'	out += \'<span style="\'+style+\'" class="fa fa-volume-up fa-2x"></span>\';'+
//							'}'+
//						'if (p.picture && p.picture.split(",").length > 1) {'+
//						'	out += \'<span style="\'+style+\'" class="fa fa-picture-o fa-2x"></span>\';'+
//						'}'+
//					'return out;'+
//						'}'+
//					'}</div>'+
//					'<h4>${id}: ${namn} </h4><img style="width:200px;max-height:200px;" src="http://maja-k.com/promenad/vh/popup/${picture}"></img>'
//					}
//				},
//			{
//				 init: "L.GeoJSON.WFS",
//				 url: "http://geoserver.smap.se/geoserver/wfs",
//				 options: {
//					 layerId: "malmows_kvarter",
//					 displayName: "Kvarter",
//					 attribution: "Stadsbyggnadskontoret, MalmÃ¶",
//					 inputCrs: "EPSG:3008",
//					 reverseAxis: false,
//					 reverseAxisBbox: true,
//					 selectable: true,
//					 popup: 'The FID: ${fid}',
//					 uniqueKey: "easting;northing",
//					 params: {
//							typeName: "malmows:SUM_KVARTER_P",
//							version: "1.1.0",
//							maxFeatures: 10000,
//							format: "text/geojson",
//							outputFormat: "json"
//						},
//					 hoverColor: '#FF0',
//					 style: {
//						 weight: 2,
//						 color: '#F00',
//						 dashArray: '',
//						 fillOpacity: 0.5
//					 }
//				 }
//			},
//			{
//				init: "L.GeoJSON.Custom",
//				url: 'http://www.vakant.nu/gis_json.aspx?',
//				options: {
//					layerId: "vakant_mark",
//					displayName: "Vakant Mark",
//					params: {
//						mId : "1290",
//						type : "Mark"
//					},
//					selectable: true,
//					popup: 'Owner: ${owner_name}',
//					style: {
//						radius: 8,
//						fillColor: "#ff7800",
//						color: "#f00",
//						weight: 1,
//						opacity: 1,
//						fillOpacity: 0.8
//					}
//				}
//			}
//			,
//			{
//				 init: "L.GeoJSON.WFS",
//				 url: "http://geoserver.smap.se/geoserver/wfs",
//				 options: {
//					 layerId: "intressepunkter",
//					 displayName: "Intressepunkter",
//					 featureType: "sandboxws:regispt",
//					 attribution: "Stadsbyggnadskontoret, MalmÃ¶",
//					 inputCrs: "EPSG:3008",
//					 reverseAxis: false,
//					 popup: '<h1>${namn}</h1><p>En popup med en bild</p><img style="width:200px;max-height:200px;" src="${picture}"></img>',
//					 bigPopup: {
//						 headerHtml: "${namn}",
//						 srcVideo: '<video controls="controls" autoplay width="240" height="135">' +
//							 			'<source src="http://geoserver.smap.se/~cleber/regis1330/video/video_061.m4v" type="video/mp4" />' +
//							 			'<source src="http://geoserver.smap.se/~cleber/regis1330/video/video_061.webm" type="video/webm" />' +
//							 			'<source src="http://geoserver.smap.se/~cleber/regis1330/video/video_061.ogg" type="video/ogg" />' +
//						 			'</video>',
//						 	srcImage: '${pictures}',
//						 	srcAudio: '${video}'
//					}
//				}
//			}
			],
			
		bl: [
		{
			init: "L.TileLayer",
			url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			options: {
				layerId: "osm",
				displayName: "OSM",
				attribution: '<span>Â© OpenStreetMap contributors</span>&nbsp;|&nbsp;<span>Tiles Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png"></span>',
				maxZoom: 18
			}
		},
		{
			init: "L.esri.BasemapLayer",
			url: "Gray",
			options: {
				layerId: "esri",
				displayName: "ESRI",
				maxZoom: 18
			}
		},


		// ESRI REST RASTER layer
		{
				init: "L.TileLayer.EsriRest",
				url: "http://kartor.malmo.se/arcgis/rest/services/malmo_karta_sv_3857/MapServer",
				options: {
					//layers: "0",
					transparent: true,
					layerId: "blablablablhjasjkasjasaaa",
					displayName: "Esri-rest-leaflet2",
					opacity: 0.8,
					minZoom: 10,
					maxZoom: 18,
					//singleTile : true,  //Funkar ej
					attribution: '<span>Â© Uffe contributors</span>&nbsp;|&nbsp;<span>Tiles Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png"></span>'
				}
		},


		{
				init: "L.TileLayer.WMS",
				url: "http://kartor.malmo.se:6080/arcgis/services/malmo_karta_sv_3857/MapServer/WMSServer",
				parentTag: "bobyggmiljo",
				options: {
					layerId: "dp_gallandejkasjk",
					displayName: "AGS wms",
					layers: '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,64,65,66',
					minZoom: 10,
					maxZoom: 18,
					format: 'image/png',
					//featureType: "polygon",
					//selectable: true,
					transparent: true,
					attribution: "@ Helsingborg stad",
					zIndex: 9
					
				}
		},
			
		
		{
			init: "L.esri.BasemapLayer",
			// 'Streets', 'Topographic', 'Oceans', 'NationalGeographic', 'Gray', 'GrayLabels', 'DarkGray', 'DarkGrayLabels', 'Imagery', 'ImageryLabels', 'ImageryTransportation', 'ShadedRelief' or 'ShadedReliefLabels' 
			url: "Topographic",
			options: {
				layerId: "esri2",
				displayName: "ESRI2",
				maxZoom: 18
			}
		}
//		,
//		{
//			init: "L.TileLayer",
//			url: 'http://xyz.malmo.se/data_e/Tilecache/malmo/malmo_leaflet_cache_EPSG900913/{z}/{x}/{y}.jpeg',
//			options: {
//				layerId: "malmotile",
//				displayName: "MalmÃ¶ karta",
//				attribution: "Â© MalmÃ¶ Stadsbyggnadskontor",
//				minZoom: 6,
//				maxZoom: 18,
//				tms: true
//			}
//		},
//		{
//			init: "L.TileLayer.WMS",
//			url: 'http://xyz.malmo.se/geoserver/gwc/service/wms',// gwc/service/
//			options: {
//				layerId: "wms-op",
//				displayName: "WMS-op",
//				layers: "malmows:smap-mobile-bakgrundskarta",
//				format: 'image/jpeg',
//				subdomains: ["xyz"],
//				transparent: true,
//				minZoom: 6,
//				maxZoom: 18,
//				tiled: true
//			}
//		},		
//		{
//			init: "L.TileLayer.WMS",
//			url: 'http://xyz.malmo.se/geoserver/gwc/service/wms',// gwc/service/
//			options: {
//				layerId: "wms-topo",
//				displayName: "WMS-Topo (OBS! endast fÃ¶r test)",
//				layers: "malmows:smap-mobile-bakgrundskarta-topo",
//				format: 'image/jpeg',
//				subdomains: ["xyz"],
//				transparent: true,
//				minZoom: 6,
//				maxZoom: 18,
//				tiled: true
//			}
//		},
//		{
//			init: "L.TileLayer.WMS",
//			url: 'http://geoserver.smap.se/geoserver/gwc/service/wms',// gwc/service/
//			options: {
//				layerId: "wms",
//				displayName: "WMS",
//				layers: "malmows:MALMO_SMA_DELOMR_P_3857_TEST2",
//				format: 'image/png',
//				subdomains: ["xyz"],
//				transparent: true,
//				minZoom: 1,
//				maxZoom: 18,
//				tiled: true
//			}
//		}
		],
		
		plugins: [
				{
					init: "L.Control.Scale",
					options: {
						imperial: false
					}
				},
				{
					init: "L.Control.LayerSwitcher",
					options: {}
				},
//				{
//				 	init: "L.Control.LayerSwitcherResponsive",
//				 	options: {}
//				},
				{
					init: "L.Control.Geolocate",
					options: {}
				},
				{
					init: "L.Control.SelectWMS",
					options: {
						buffer: 5
					}
				},
				{
					init: "L.Control.SelectVector",
					options: {
						buffer: 5
					}
				},
//				{
//					init: "L.Control.MyPlugin",
//					options: {
//					 		position: "bottomright"
//					}
//				},
//				{
//					init: "L.Control.ShareTweet",
//					options: {}
//				},
//				{
//					init: "L.Control.SharePosition",
//					options: {}
//				},
				{
					init: "L.Control.Search",
					options: {}
				},
					{
						init: "L.Control.Zoombar",
						options: {}
					},
				// {
			//		init: "L.Control.ThreeD",
			//		options: {
					 		
				//		}
			//	}
					{
						init: "L.Control.ShareLink",
						options: {
							addToMenu: false
						}
					}
					,
					// {
					//	init: "L.Control.Menu",
					//	options: {}
					// },
					{
						init : "L.Control.RedirectClick",		
						option: {
							addToMenu: false,
							url: "http://xyz.malmo.se/urbex/index.htm?p=true&xy=${x};${y}"
						}
					},
					{
 					init: "L.Control.Info",
 					options: {}
 				 	},
					{
 					init: "L.Control.Print",
 					options: {}
 				 	},
 				 	{
					init: "L.Control.Opacity",
					options: {
					 		addToMenu: false,
					 		savePrefBox: true
					}
				},
				{
					init: "L.Control.ToolHandler",
					options: {
					 		addToMenu: false
					}
				}
				// ,
				// {
					 //init: "L.Control.Add2HomeScreen",
					 //options: {}
				// }
				,
				{
					 init: "L.Control.FullScreen",
					options: {position: 'topright'}
				}
				,
				{
					init: "L.Control.DrawSmap",
					options: {}
				}
	]
};