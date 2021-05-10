import React, { useState } from 'react';
import { Con } from './Content.elements';
import logo from './logo.svg'
import Axios from 'axios';


const Content = () => {

    const [joke, setJoke] = useState("")
    const getGsheet = () => {
        Axios.get("https://official-joke-api.appspot.com/random_joke").then(
            (response) => {
                setJoke(response.data.setup + " ... " + response.data.punchline);
            }
        );
    }

    return (
        <>
            <Con>
                <h6>AXIOS</h6>
                <h1>API Jokes</h1>
                <p>{joke}</p>
                <p><img src={logo} alt="logo"/><button onClick={getGsheet}>Get Jokes</button></p>
            </Con>
        </>
    )
}

export default Content
