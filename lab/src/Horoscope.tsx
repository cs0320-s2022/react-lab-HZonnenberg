import React, {Dispatch, SetStateAction, useState} from 'react';
import logo from './logo.svg';
import TextBox from "./TextBox";
import "react-awesome-button";
//@ts-ignore
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import axios from "axios";


function Horoscope() {
    const [suntext, setSun]: [string, Dispatch<SetStateAction<string>>] = useState("");
    const [moon, setMoon]: [string, Dispatch<SetStateAction<string>>] = useState("");
    const [rising, setRising]: [string, Dispatch<SetStateAction<string>>] = useState("");

    //TODO: Fill in the ? with appropriate names/values for a horoscope.
//HINT: Look at the HoroscopeHandler's response in Main.java to choose a default useState value.
    const [horoscope, setHoroscope] = useState([]);

    const requestHoroscope = () => {
        const toSend = {
            //TODO: Pass in the values for the data. Follow the format the route expects!
            sun: suntext,
            moon: moon,
            rising: rising
        };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import axios!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        axios.post("http://localhost:4567/horoscope", toSend, config)
            .then(response => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setHoroscope(response.data['horoscope']);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="Horoscope">
            <header className="Horoscopes">
                <TextBox label={"sun"} change={setSun}/>
                <TextBox label={"moon"} change={setMoon}/>
                <TextBox label={"rising"} change={setRising}/>
                <AwesomeButton onPress={requestHoroscope}>Press me!</AwesomeButton>
                <div>
                    {horoscope.map((suggestion: string) => <p>{suggestion}</p>)}
                </div>
            </header>
        </div>
    );
}

export default Horoscope;
