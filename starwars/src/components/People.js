import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const user = function () { }

function Characters() {
    const [data, setData] = useState([]);
    // const [type, setType] = useState('name');
    useEffect(() => {
        axios.get(`https://swapi.co/api/people/1`)

            .then(response => {
                console.log('StarWars! :', response)
                setData(response.data);
            })

            .catch(error => {
                console.log('The Empire:', error)
            })

    }, [])


    return (
        <div>Hello,
            {data.name}
            {object.values(array).map(name =>{
                key = {name}
            })}
        </div>

    )
};

export default Characters;