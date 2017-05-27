/* global Plotly */
import React from 'react'   

class PieChart extends React.Component {

    draw = () => {
        var trace1 = {
            values: [19, 26, 55],
            labels: ['Residential', 'Non-Residential', 'Utility'],
            type: 'pie'
        };

        var data = [trace1];

        var layout = {
            title:'',
            height: 400,
            width: 480
        };

        Plotly.newPlot('piechart', data, layout, {displaylogo: false});
    }

    componentDidMount() {
        this.draw()
    }
   
    render() {
         return (
            <div id="piechart"></div>        
         )
    }    

   
}

export default PieChart