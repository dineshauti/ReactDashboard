import React from 'react'
import Plotly from 'plotly.js'   

class BarChart extends React.Component {

    draw = () => {
        var trace1 = {
        x: ['withdraw', 'Loan', 'customer service'],
        y: [20, 14, 23],
        name: 'Average',
        type: 'bar'
        };

        var trace2 = {
        x: ['withdraw', 'Loan', 'customer service'],
        y: [12, 18, 29],
        name: 'Prediction',
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