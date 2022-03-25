var wms_layers = [];

var format_India_Boundary_0 = new ol.format.GeoJSON();
var features_India_Boundary_0 = format_India_Boundary_0.readFeatures(json_India_Boundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_India_Boundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_India_Boundary_0.addFeatures(features_India_Boundary_0);
var lyr_India_Boundary_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_India_Boundary_0, 
                style: style_India_Boundary_0,
                interactive: true,
                title: '<img src="styles/legend/India_Boundary_0.png" /> India_Boundary'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CollegesData_2 = new ol.format.GeoJSON();
var features_CollegesData_2 = format_CollegesData_2.readFeatures(json_CollegesData_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CollegesData_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CollegesData_2.addFeatures(features_CollegesData_2);
var lyr_CollegesData_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CollegesData_2, 
                style: style_CollegesData_2,
                interactive: true,
                title: '<img src="styles/legend/CollegesData_2.png" /> CollegesData'
            });

lyr_India_Boundary_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_CollegesData_2.setVisible(true);
var layersList = [lyr_India_Boundary_0,lyr_OpenStreetMap_1,lyr_CollegesData_2];
lyr_India_Boundary_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CollegesData_2.set('fieldAliases', {'NIRF': 'NIRF', 'Name': 'Name', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_India_Boundary_0.set('fieldImages', {'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_CollegesData_2.set('fieldImages', {'NIRF': 'Range', 'Name': 'TextEdit', 'field_3': 'Hidden', 'field_4': 'Hidden', 'field_5': 'Hidden', 'field_6': 'Hidden', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_India_Boundary_0.set('fieldLabels', {});
lyr_CollegesData_2.set('fieldLabels', {'NIRF': 'inline label', 'Name': 'inline label', });
lyr_CollegesData_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});