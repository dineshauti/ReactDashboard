/* global Plotly */
import React from 'react'   

class BarChart extends React.Component {

    draw = () => {
        var trace1 = {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        name: 'SF Zoo',
        type: 'bar'
        };

        var trace2 = {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [12, 18, 29],
        name: 'LA Zoo',
        type: 'bar'
        };

        var data = [trace1, trace2];

        var layout = {
            barmode: 'group',
            height: 400,
            width: 480
        };

        Plotly.newPlot('barchart', data, layout, {displaylogo: false});

    }

    componentDidMount() {
        this.draw()
    }
   
    render() {
         return (
            <div id="barchart"></div>        
         )
    }    

   
}

export default BarChart