/**
 * Created by bmannava on 8/26/15.
 */
var historicalOverlay;
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;
var map, heatmap;
var latLong = {lat: 37.304588, lng: -121.865787};
function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
        center: latLong
    });

    var imageBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(37.303938, -121.866606),
        new google.maps.LatLng(37.305238, -121.864969));

    historicalOverlay = new google.maps.GroundOverlay('Target_SJ_overlay.png', imageBounds);
    historicalOverlay.setMap(map);

    addMarker(latLong, map);

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map
    });
}

function addMarker(location, map) {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    var iconBase = 'http://maps.google.com/mapfiles/kml/paddle/';
    var marker = new google.maps.Marker({
        position: location,
        label: 'A',
        draggable: true,
        animation: google.maps.Animation.DROP,
        map: map,
        icon: iconBase + 'grn-blank.png'
    });
}


function getPoints() {
    var i = 0, lat = 0, lng = 0, wt = 0, arr = [], obj;

    for (var i = 0; i < mapObj.heatmap.length; i++) {
        lat = mapObj.heatmap[i][0];
        lng = mapObj.heatmap[i][1];
        wt = mapObj.heatmap[i][2];
        if (wt >= 1) {
            loc = new google.maps.LatLng(lat, lng);
            obj = {location: loc, weight: wt};
            arr.push(obj);
        }
    }
    return arr;
}

function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
    var gradient = [
        'rgba(0, 255, 255, 0)',
        'rgba(0, 255, 255, 1)',
        'rgba(0, 191, 255, 1)',
        'rgba(0, 127, 255, 1)',
        'rgba(0, 63, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 223, 1)',
        'rgba(0, 0, 191, 1)',
        'rgba(0, 0, 159, 1)',
        'rgba(0, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
    ]
    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
    heatmap.set('radius', heatmap.get('radius') ? null : 5);
}

function changeOpacity() {
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}
