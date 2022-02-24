import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            id:1,
            name: "Glen Chiridza",
            url: "images/person.jpg"
        },
        {
            id:2,
            name: "Wendy Chiridza",
            url: "images/person.jpg"
        },
        {
            id:3,
            name: "Clive Chiridza",
            url: "images/person.jpg"
        },
        {
            id:4,
            name: "Faith Chiridza",
            url: "images/person.jpg"
        }
    ]);

    const swiped = (direction, nameToRemove) => {
        
    };

    const outOfFrame = (name) => {
        console.log(name + "left of screen")
    }

    return (
        <div className='tinder_cards'>
            <div className='tinderCards_cardContainer '>
                {people.map((person) => (
                    <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={['up','down']}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div 
                            style={{backgroundImage:`url(${person.url})`}}
                            className='card'>

                                <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>


        </div>
    )
}

export default TinderCards