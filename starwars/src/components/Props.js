import React from 'react';

const User = props => { 
    console.log('this is:', props)

    return (
        <div>Hello agian {props.characterM}</div>
    )
 }



export default User;