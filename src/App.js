import './App.css';
import List from "./components/List" // ap.js içinde çağıracağız componnetleri import ediyorum.
// import Picture from './components/Picture'// ap.js içinde çağıracağız componnetleri import ediyorum.
import {data} from "./components/data.js" // buradaki bilgileri props olarak göndermek için import ediyorum
import { useState } from 'react'; // değişecek state durumu için useState Hook'unu import ediyoruz.

function App() {
  const [person, setPerson] = useState(data); // datayı usestateye başlangıç olarak atadık. Datamız bir array 
  const [show, setShow] = useState(true); //uygulamadaki h3 metinlerinin görünmesi amacıyla tanımladım.
  const [text, setText] = useState("Tümünü Temizle"); //uygulamadaki buton metnini değiştirilmesi amacıyla tanımladım.


  // butona tıkladığımız olan tetiklenecek olayları tanımladık.
  const handleclick = () => {
    setPerson([]); /*datamız bir arraydi eğer butona tıklarsak array içeriği boş olacaktır. */
    setShow(false);// h3 metinlerin başlangıç değerini değiştirdik.
    setText("İyi ki Doğdunuz"); // butonun text metnini değiştirdik.
  };

  return (
    <section>
      <div className="container">
        {/*Burda arrayimizde kaç personel varsa o kadar sayıyı dinamik olarak döndürür.*/}
        {show && <h3> Bu Ay {person.length} Personelimizin Doğum Günü </h3>}
        {/*props olarak alt componente gönderiyoruz*/}
        <List person={person} />
        <button onClick={handleclick}>{text}</button>
        {!show && <h3 className="value"> İnsan Değerlidir.</h3>}
      </div>
    </section>
  );
}

export default App;
