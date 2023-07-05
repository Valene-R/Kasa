import React from 'react';
import data from "../../data/data.json";
import Card from '../Card/Card';


const Cards = () => {
    
    return (
        <section className='accommodationsList'>
            {data.map((accommodation) => (
               <Card key={accommodation.id} accommodation = {accommodation} />
            ))}
        </section>
    );
};

export default Cards;