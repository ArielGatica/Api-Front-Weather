import React, { Component } from 'react';
import config from '../config';
import axios from 'axios';

export default class WeatherInfo extends Component {
    async componentDidMount(){
        const res = await axios.post(`${config.API_BACKEND_WEATHER}/weather`, { lat: -33.3837200 , lon: -70.6773500 })
        const read = res.data.data.map((xx) => { return xx.currently})
        console.log(JSON.stringify(read))
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}