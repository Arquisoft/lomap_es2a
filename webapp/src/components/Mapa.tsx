import { Map, tileLayer, TileLayer} from 'leaflet';

const Mapa = () =>{
const mymap = new Map('map').setView([43.3082977,-1.9837398], 10);
  tileLayer('https://tile.osm.ch/switzerland/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    bounds: [[45, 5], [48, 11]]
  }).addTo(mymap);

  return(
    mymap
  );
  
}

export default Mapa;