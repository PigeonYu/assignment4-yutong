mapboxgl.accessToken = 'pk.eyJ1IjoieXV0b25nNTA1IiwiYSI6ImNtOWJ0b2xvNTBqMXYyanB2ZThobGFzcHIifQ.KSxcqT9gKPhoNz2TgnA8HA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-73.991, 40.730],
    zoom: 11.5,
    scrollZoom: false
});
map.on('load', () => {
    map.addSource('bookstores', { type: 'geojson', data: 'bookstores.geojson' });
    map.addLayer({
        id: 'bookstore-points',
        type: 'circle',
        source: 'bookstores',
        paint: {
            'circle-radius': 8,
            'circle-color': '#1BA784',
            'circle-stroke-width': 1.5,
            'circle-stroke-color': '#fff'
        }
    });
    map.addSource('boroughs', { type: 'geojson', data: 'boroughs.geojson' });
    map.addLayer({
        id: 'borough-points',
        type: 'circle',
        source: 'boroughs',
        paint: {
            'circle-radius': ['interpolate', ['linear'], ['get', 'stores'], 1, 6, 5, 20],
            'circle-color': ['match', ['get', 'borough'], 'Manhattan', '#FFD700', 'Brooklyn', '#FF8C00', '#ccc'],
            'circle-stroke-color': '#000',
            'circle-stroke-width': 1
        }
    });
    map.on('click', 'bookstore-points', (e) => {
        const props = e.features[0].properties;
        const coordinates = e.features[0].geometry.coordinates;
        new mapboxgl.Popup().setLngLat(coordinates)
            .setHTML(`<h3>${props.name}</h3><p>${props.description}</p>`)
            .addTo(map);
    });
    map.on('mouseenter', 'bookstore-points', () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'bookstore-points', () => {
        map.getCanvas().style.cursor = '';
    });
});