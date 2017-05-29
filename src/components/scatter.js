import React from 'react'
import Plotly from 'plotly.js'
import axios from 'axios'

var temperature = []
var timeStamp = []

class Scatter extends React.Component {

    fetchData = () => {
        var url = 'https://ifarm-uncc.mybluemix.net/data'
        var config  = {
            headers: {'Access-Control-Allow-Origin' : '*'}
        }

        var self = this

        axios.get(url, config)
            .then(function(response){

                var body = response.data

                for (var i = 0; i < body.length; i++) {
                    temperature.push(parseFloat(body[i].temperature));  
                    timeStamp.push(body[i].timeStamp);
                }

                self.setState({
                    temperature: temperature,
                    timeStamp: timeStamp
                }) 
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
            height: 400, 
            xaxis: {
                title: 'Time',                
            },
            yaxis: {
                title: 'Number of people',                
            }      
        };

        Plotly.newPlot('scatter', data, layout, {displaylogo: false});



    }

    componentDidMount() {
        this.fetchData()
        this.draw()
    }

    componentDidUpdate() {
        this.draw()        
    }
   
    render() {
        
         return (
            <div id="scatter"></div>      
         )
    }    

   
}

export default Scatter