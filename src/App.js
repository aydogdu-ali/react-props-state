import './App.css';
import List from "./components/List" // ap.js içinde çağıracağız componnetleri import ediyorum.
// import Picture from './components/Picture'// ap.js içinde çağıracağız componnetleri import ediyorum.
import {data} from "./components/data.js" // buradaki bilgileri props olarak göndermek için import ediyorum
import { useState } from 'react'; // değişecek state durumu için useState Hook'unu import ediyoruz.

function App() {

  const[person, setPerson] = useState(data)
  const [show, setShow] = useState(true)
  
  const handleclick = ()=>{
    setPerson([])
    setShow(!show)
  }

  return (
    <section>
      <div className="container">
        { show && <h3> Bu Ay {person.length} Personelimizin Doğum Günü </h3>}
        <List person={person} /> {/*props olarak alt componente gönderiyoruz*/}
        <button onClick={handleclick}>Tümünü Temizle</button>
        {!show &&  (
          <div className="value"> Çalışanlarımız Değerlidir.</div>
        )  }
      </div>
    </section>
  );
}

export default App;
