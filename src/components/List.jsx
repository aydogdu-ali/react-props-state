import React from 'react'

// prop olarak gelen datayı karşılıyoruz.
const List = ({person}) => { 
    console.log(person)
       return (
    <div className="person_list">
      {/*map fonksiyonu ile array içindeki verileri DOM a basıyoruz.*/}
      {person.map((person) => {
        // eslint-disable-next-line no-lone-blocks
        {/*Burda destructuring yapıyoruz yapmasaydık. person.image şeklinde yazabilirdik*/ }
        const { id, name, birth, age, image } = person;
        return (
          <div key={id} className="person"> {/*id parametresini vircual dom için zorunlu veriyoruz*/}
            <div>
              <img src={image} alt={name} />
            </div>
            <div>
              <small>{name}</small>
              <br />
              <small>{birth}</small>
              <br />
              <small>{age} yaşında</small>
            </div>
          </div>
        );
      })}
      
    </div>
  );
}
export default List

