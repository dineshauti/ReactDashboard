/* global Plotly */
import React from 'react'
import axios from 'axios'

var temperature = []
var timeStamp = []

class Scatter extends React.Component {

    fetchData = () => {
        var url = 'http://localhost:8000/data'
        var config  = {
            headers: {'Access-Control-Allow-Origin' : '*'}
        }

        axios.get(url, config)
            .then(function(response){
                var body = response.data

                for (var i = 0; i < body.length; i++) {
                    temperature.push(parseFloat(body[i].temperature));
                    timeStamp.push(parseFloat(body[i].timeStamp));
                } 
            });

        

    }

    draw = () => {

        console.log(temperature)
        console.log(timeStamp)

        var trace1 = {
            x: timeStamp, 
            y: temperature,
            type: 'scatter'
            //mode: 'markers'
        };

        var data = [trace1];

        var layout = {
            title:'Scatter Plot',
            height: 400,
            margin: {
                t:0, r:0, l:30
            }            
            
        };

        Plotly.newPlot('scatter', data, layout, {displaylogo: false});

    }

     autorangeChart() {
        Plotly.relayout('scatter', {
            'xaxis.autorange': true,
            'yaxis.autorange': true
        });
    }

    componentDidMount() {
        this.fetchData()
        this.draw()
        this.autorangeChart()

    }
   
    render() {
        
         return (
            <div id="scatter"></div>      
         )
    }    

   
}

export default Scatter