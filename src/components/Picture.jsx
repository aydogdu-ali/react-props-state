import React from 'react'
import App from "../resim/App.png" // Kullanacağımız resimleri import ediyoruz
import List from '../resim/List.png' //Kullanacağımız resimleri import ediyoruz
import PicComponent from "../resim/PicComponent.png"   //Kullanacağımız resimleri import ediyoruz

const Picture = () => {
  // RETURN kısmında kullanılacak her Javascript kodu  ya da ifadesi ve inline CSS  {} ile yazılır.
  return (
    <div className="resim">
      <div>
        <h6>App Componenti </h6>
        <p>
          {/*Her bir resim için hedef yolunu ayrı ayrı belirtiyoruz.*/}
          <a target="_blank" href={App} rel="noopener noreferrer">
            {/*Yukarıda import ettiğimiz resmi source kısmına yazıyoruz.*/}
            <img
              className="pic"
              src={App}
              alt="App"
              style={{ width: "565px" }}
            />
          </a>
        </p>
      </div>
      <div>
        <h6>List Componenti </h6>
        <p>
          <a target="_blank" href={App} rel="noopener noreferrer">
            <img
              className="pic"
              src={List}
              alt="List"
              style={{ width: "550px" }}
            />
          </a>
        </p>
      </div>
      <div>
        <h6> Picture Componenti</h6>
        <p>
          <a target="_blank" href={PicComponent} rel="noopener noreferrer">
            <img
              className="pic"
              src={PicComponent}
              alt="PicComponent"
              style={{ width: "500px" }}
            />
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Picture