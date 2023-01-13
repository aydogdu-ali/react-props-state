import React from 'react'



const List = ({person}) => { 
    console.log(person)
    
 

  return (
    <div className="person_list">
      {person.map((person) => {
        const { id, name, birth, age, image } = person;
        return (
          <div key={id} className="person">
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

