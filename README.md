# NYC Independent Bookstores (Assignment 4)

This is my submission for GIS Assignment 4. It is an interactive web map created using Mapbox GL JS that displays the locations of seven independent bookstores in New York City, along with borough-level bookstore density points.

## 📍 What the Map Shows

- **Bookstore Points**: Each bookstore is represented by a green circle. Click to learn more about each location.
- **Borough Points**: Two boroughs (Manhattan and Brooklyn) are shown as larger circles. Their size and color are determined by the number of bookstores.
- **Zoom Controls**: Users can zoom in or out using the buttons below the map.

## ⚙️ Technologies Used

- HTML, CSS, JavaScript
- Mapbox GL JS
- GeoJSON (custom-created for both bookstores and borough data)

## 📁 Files

- `index.html` — structure of the webpage
- `styles.css` — layout and styling
- `mapbox.js` — defines the map, loads GeoJSON layers
- `scripts.js` — handles button interactions and zoom control
- `bookstores.geojson` — contains data for 7 bookstores
- `boroughs.geojson` — contains borough points with `stores` attribute

## 🌍 Project Purpose

This map celebrates NYC’s independent bookstores and enhances spatial thinking using GIS tools. It also explores basic data-driven styling and interactivity through Mapbox GL JS.

## 🔗 Live Site

Once deployed via GitHub Pages, the project can be viewed online.

Created by **Yutong Zheng**
