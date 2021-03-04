import Looper from "./components/looper";
import "./App.css";

// all soundfiles path & name
const dataArray = [
  {
    src: "sounds/sound1.mp3",
    color: "#725AC1",
    name: "Silent Star",
  },
  {
    src: "sounds/sound2.mp3",
    color: "#FF7C00",
    name: "Basic Drums",
  },
  {
    src: "sounds/sound3.mp3",
    color: "green",
    name: "Aliens",
  },
  {
    src: "sounds/sound4.mp3",
    color: "#00FFFF",
    name: "Darbuka",
  },
  {
    src: "sounds/sound5.mp3",
    color: "red",
    name: "Strong Drums",
  },
  {
    src: "sounds/sound6.mp3",
    color: "#88A09E",
    name: "Wild West",
  },
  {
    src: "sounds/sound7.mp3",
    color: "blue",
    name: "Comedy",
  },
  {
    src: "sounds/sound8.mp3",
    color: "#FFFF5B",
    name: "Tik-Tak",
  },
  {
    src: "sounds/sound9.mp3",
    color: "#FF6E79",
    name: "Wiki Wiki Wa Wa",
  },
];

function App() {
  return (
    <div id="App">
      <h1 className="glow">LOOPERITO</h1>
      <Looper allSounds={dataArray} />
    </div>
  );
}

export default App;
