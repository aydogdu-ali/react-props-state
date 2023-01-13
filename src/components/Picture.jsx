import React from 'react'
import App from "../resim/App.png" // Kullanacağımız resimleri import ediyoruz
import List from '../resim/List.png'; //Kullanacağımız resimleri import ediyoruz

const Picture = () => {
  return (
    <div className="resim">
      <div>
        <h6>App Componenti </h6>
        <p>
          <a target="_blank" href={App} rel="noopener noreferrer">
            <img
              className="pic"
              src={App}
              alt="App"
              style={{ width: "150px" }}
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
              style={{ width: "150px" }}
            />
          </a>
        </p>
      </div>
      <div>
        <h6> Picture Componenti</h6>
        <p>
          <a target="_blank" href={App} rel="noopener noreferrer">
            <img
              className="pic"
              src={App}
              alt="App"
              style={{ width: "150px" }}
            />
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Picture