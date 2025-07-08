var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_222_1 = new ol.format.GeoJSON();
var features_222_1 = format_222_1.readFeatures(json_222_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_222_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_222_1.addFeatures(features_222_1);
var lyr_222_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_222_1, 
                style: style_222_1,
                popuplayertitle: '222',
                interactive: true,
                title: '<img src="styles/legend/222_1.png" /> 222'
            });
var format_111_2 = new ol.format.GeoJSON();
var features_111_2 = format_111_2.readFeatures(json_111_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_111_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_111_2.addFeatures(features_111_2);
var lyr_111_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_111_2, 
                style: style_111_2,
                popuplayertitle: '111',
                interactive: true,
                title: '<img src="styles/legend/111_2.png" /> 111'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_222_1.setVisible(true);lyr_111_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_222_1,lyr_111_2];
lyr_222_1.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'centre_ré': 'centre_ré', });
lyr_111_2.set('fieldAliases', {'fid': 'fid', 'Airport_Na': 'Airport_Na', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Google_Map': 'Google_Map', });
lyr_222_1.set('fieldImages', {'fid': '', 'REGION': '', 'NOM_REGION': '', 'centre_ré': '', });
lyr_111_2.set('fieldImages', {'fid': '', 'Airport_Na': '', 'Latitude': '', 'Longitude': '', 'Google_Map': '', });
lyr_222_1.set('fieldLabels', {'fid': 'no label', 'REGION': 'no label', 'NOM_REGION': 'header label - visible with data', 'centre_ré': 'no label', });
lyr_111_2.set('fieldLabels', {'fid': 'no label', 'Airport_Na': 'header label - visible with data', 'Latitude': 'header label - visible with data', 'Longitude': 'header label - visible with data', 'Google_Map': 'header label - visible with data', });
lyr_111_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});