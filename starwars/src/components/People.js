import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

function Characters() {
    const [data, setData] = useState([]);
useEffect(() => {
    axios.get("https://swapi.co/api/people/1")

    .then(response => {
        console.log('StarWars! :', response)
        setData(response.data);
    })

    .catch(error => {
        console.log('The Empire:', error)
    })
    
},[])


    return(
        <div>Hello
            {data.name}
        </div>
        
    )
};

export default Characters;