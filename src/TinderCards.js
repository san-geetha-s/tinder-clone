import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from "react-tinder-card"

function TinderCards() {
  const [people,setPeople] =useState([

    {
      name:'Elon Musk',
      url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",

    },
    {
      name:"Christiano Ronaldo",
      url:"https://i.ds.at/-TEqAQ/rs:fill:750:0/plain/2022/08/17/ronaldo.jpg",
      

    },{
      name:"Steve Harvey",
      url:"https://images.mubicdn.net/images/cast_member/40212/cache-246020-1502585990/image-w856.jpg?size=800x",

    },
    {
      name:"Larry Page",
      url:"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5ODc2NTUzODU1ODcwOTY1/gettyimages-83414114.jpg",

    }
  ])

  const swiped=(direction,nameToDelete) =>{
    console.log('You swiped :'+nameToDelete);
  }
  const outOffFrame= (name) => {
    console.log(name + ' left the screen')
  }
  

  return (
    <div className='tinderCards'>
      <div className="tinderCards__cardContainer">
      {
        people.map((person)=>(
          <TinderCard
           className="swipe"
           key={person.name}
           preventSwipe={["up","down"]}
           onSwipe={(dir) => swiped(dir,person.name)}
           onCardLeftScreen={()=> outOffFrame(person.name)}
           >
            <div style={{backgroundImage: `url(${person.url})`}}
            
            className="card">
              <h3>{person.name}</h3>
              </div> </TinderCard>
        ))
      }

      </div>
      
      
    </div>
  )
}

export default TinderCards
