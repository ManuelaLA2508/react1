import './App.css';
import Card from './components/Card';
import Tarjeta from './components/Tarjeta';

function App() {
  return (
    <div className="App">
      <Card
        nombre="luis daniel"
        cargo="diseñador grafico"
        comment="Dios mio esto es muchisima info ojala me de cuando este haciendo el trabajo"
        imagen="man"
      />

      <Card
        nombre="manuela lopera"
        cargo="periodista"
        comment="hola como estas jajajaja yo bien y tu no se que escribir aca"
        imagen="pela"
      />


      <Tarjeta 
        imagen="hero"
        ti="Order Summary"
        you="You can now listen to millions of songs, audiobooks, and podcasts on any 
        device anywhere you like!"
        imagen1="icon"
        h="Annual Plan"
        p="$59.99/year"
        p1="Change"
        boton1="Proceed to Payment"
        boton2="Cancel Order"
      />
    </div>


  );
}

export default App;
