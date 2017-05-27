import React from 'react'
import ReactDOM from 'react-dom'
import Scatter from './components/scatter'
import BarChart from './components/barChart'
import PieChart from './components/pieChart'
import Demo from './components/demo'

// Create a component. This component should produce some HTML
class App extends React.Component {
    
    render() {
        return (
            <div className="parent_container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Bar Plot
                            </div>
                            <div className="card-block">
                                <div id="barchart"><BarChart /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Pie Chart
                            </div>
                            <div className="card-block">
                                <div id="piechart"><PieChart /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <div className="card">
                            <div className="card-header">
                                Scatter Plot
                            </div>
                            <div className="card-block">
                                <div id="scatter"><Scatter /></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>       
    )
    }

}

//Take this components generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))