import React from 'react'
import ReactDOM from 'react-dom'
import Scatter from './components/scatter'
import BarChart from './components/barChart'
import PieChart from './components/pieChart'


// Create a component. This component should produce some HTML
class App extends React.Component {

    state = {
        temperature: '',
        timeStamp: ''
    }
    
    render() {
        return (
            <div className="container">
                <div className="card-deck">
                    <div className="card card-success text-center mb-3">
                        <div className="card-block">
                            <p className="card-text display-1">29</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card card-warning text-center mb-3">
                        <div className="card-block">
                            <p className="card-text display-1">54</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card card-info text-center mb-3">
                        <div className="card-block">
                            <p className="card-text display-1">10</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card mb-3">
                            <div className="card-header">
                                Predictions
                            </div>
                            <div className="card-block">
                                <div id="barchart"><BarChart /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card mb-3">
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
                    <div className="col-sm-12">
                        <div className="card mb-3">
                            <div className="card-header">
                                Max Traffic
                            </div>
                            <div className="card-block">
                                <div id="scatter">
                                    <Scatter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>       
    )
    }

}

//Take this components generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container-fluid'))