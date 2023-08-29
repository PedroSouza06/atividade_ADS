import logo from './logo.svg';
import './App.css';
import sorrindo from "./img/Laughing-Emoji-PNG-Photo.png"
import alegre from "./img/images.jpeg"
import festa from "./img/download.png"
import bailarina from "./img/woman-dancing.webp"

function App() {
const name = 'Diego'
const newName = name.toUpperCase()
function sum(a,b) {
  return a + b
}

const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <p>Olá, {newName}</p>
      <h1> Hello World </h1>
    <img src={sorrindo} alt="sorrindo" title="Sorrindo" height='100px' hidth='100px' /> 
    <p>Clique no emoji para exibir o nome dele!.</p>
    <img src={alegre} title="Alegre" height='40px' hidth='40' />
    <img src={festa} title="Festa" height='40px' hidth='40' />
    <img src={bailarina} title="Bailarina" height='40px' hidth='40' />


    </div>
    
  );
}

export default App;