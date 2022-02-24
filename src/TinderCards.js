import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'
import axios from './axios';

function TinderCards() {
    const [people, setPeople] = useState([
        
    ]);

    const offline_people = [
        {
            "_id":1,
            "name":"Faith Chiridza",
            "imageUrl":"images/person.jpg"
        },
        {
            "_id":2,
            "name":"Wendy Chiridza",
            "imageUrl":"images/wendy.jpg"
        },
        {
            "_id":3,
            "name":"Glen Chiridza",
            "imageUrl":"images/person.jpg"
        },
        {
            "_id":4,
            "name":"Clive Chiridza",
            "imageUrl":"images/clive.jpg"
        }
    ]


    //when tinder cards load, run this piece of chord onces and don't run it again
    useEffect(() => {

        async function fetchData() {
            const req = await axios.get('/tinder/cards');
            
            setPeople(req.data);
        
        }
        fetchData();
    }, [])   //when item in [] brackets changes it will trigger

    //if no network or user offline use the offline images
    if(people.length == 0){
        setPeople(offline_people)
       }
    console.log(people);



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
                    key={person._id}
                    preventSwipe={['up','down']}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div 
                            style={{backgroundImage:`url(${person.imageUrl})`}}
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