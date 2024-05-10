import L from 'leaflet';

const baseIconUrl = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/';
const shadowUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png';
const colors = [

  { name: 'Red', iconUrl: 'marker-icon-2x-red.png' },
  // { name: 'Green', iconUrl: 'marker-icon-2x-green.png' },
  // { name: 'Yellow', iconUrl: 'marker-icon-2x-yellow.png' },

];

// function hashIdToColorIndex(id) {
//     let hash = 0;
//     for (let i = 0; i < id.length; i++) {
//       const char = id.charCodeAt(i);
//       hash = (hash << 5) - hash + char;
//       hash = hash & hash; 
//     }
//     return Math.abs(hash % colors.length); 
//   }

export function createColorIconById(id) {
    // const colorIndex = hashIdToColorIndex(id);
    const color = colors[0];
    return new L.Icon({
      iconUrl: `${baseIconUrl}${color.iconUrl}`,
      shadowUrl: shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
  }
