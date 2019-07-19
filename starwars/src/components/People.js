import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import User from './Props'


function Characters() {
    const [data, setData] = useState([]);

    // const [type, setType] = useState('name');
    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`)

            .then(response => {
                console.log('StarWars! :', response)
                setData(response.data);
                const characters = data.results
                
                console.log('people:', characters)
            })

            .catch(error => {
                console.log('The Empire:', error)
            })

    }, [])


    return (
        <div>Hello,
            {data.result}
           
        </div>

    )
};

export default Characters;
