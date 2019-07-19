import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function CharacterCards() {
    const [data, setData] = useState([]);

     useEffect(() => {

         axios.get(`https://swapi.co/api/people/`)
            .then(response => {
                console.log('The Force?:', response.data.results)
                const items = response.data.results;
                setData(items);
            })
            .catch(error => {
                console.log('The Empire Strikes Back ', error);
            })

     }, [])

     return (
        <div>
            
            {data.map((item) => <div
            name={item.name}
            birth_year={item.birth_year} 
            height={item.height} 
            skin_color={item.skin_color} 
            eye_color={item.eye_color}  />)}

        </div>
    )
} 
export default CharacterCards


