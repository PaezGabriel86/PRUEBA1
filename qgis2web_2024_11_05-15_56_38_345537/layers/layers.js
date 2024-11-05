var wms_layers = [];


        var lyr_BingAerial_0 = new ol.layer.Tile({
            'title': 'Bing Aerial',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });
var format_vial_primaria_1 = new ol.format.GeoJSON();
var features_vial_primaria_1 = format_vial_primaria_1.readFeatures(json_vial_primaria_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vial_primaria_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vial_primaria_1.addFeatures(features_vial_primaria_1);
var lyr_vial_primaria_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vial_primaria_1, 
                style: style_vial_primaria_1,
                popuplayertitle: "vial_primaria",
                interactive: true,
                title: '<img src="styles/legend/vial_primaria_1.png" /> vial_primaria'
            });

lyr_BingAerial_0.setVisible(true);lyr_vial_primaria_1.setVisible(true);
var layersList = [lyr_BingAerial_0,lyr_vial_primaria_1];
lyr_vial_primaria_1.set('fieldAliases', {'qc_id': 'qc_id', 'gid': 'gid', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'sentido': 'sentido', 'fun': 'fun', 'hct': 'hct', 'sag': 'sag', });
lyr_vial_primaria_1.set('fieldImages', {'qc_id': '', 'gid': '', 'fna': '', 'gna': '', 'nam': '', 'sentido': '', 'fun': '', 'hct': '', 'sag': '', });
lyr_vial_primaria_1.set('fieldLabels', {'qc_id': 'no label', 'gid': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'inline label - visible with data', 'sentido': 'no label', 'fun': 'no label', 'hct': 'no label', 'sag': 'no label', });
lyr_vial_primaria_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});