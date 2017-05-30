import React from 'react'
import ReactDOM from 'react-dom'
import Scatter from './components/scatter'
import BarChart from './components/barChart'
import PieChart from './components/pieChart'
import CardWrapper from './components/cardWrapper'



// Create a component. This component should produce some HTML
class App extends React.Component {

    state = {
        temperature: '',
        timeStamp: ''
    }
    
    render() {
        return (
            <div className="container">
                <CardWrapper />
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
                                Services
                            </div>
                            <div className="card-block">
                                <div id="piechart"><PieChart /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card-group text-right">
                            <div className="card text-center mb-3">
                                <div className="card-block">                               
                                    <p className="display-1">10</p>
                                    <p className="card-text">Average time/customer (mins)</p>
                                    <p className="card-text"><small className="text-muted">Last updated 1 mins ago</small></p>                                                               
                                </div>
                            </div>
                            <div className="card text-center mb-3">
                                <div className="card-block">
                                    <p className="display-1">7</p>
                                    <p className="card-text">Number of customers in Queue</p>
                                    <p className="card-text"><small className="text-muted">Last updated 1 mins ago</small></p>                                 
                                </div>
                            </div>
                            <div className="card text-center mb-3">
                                <div className="card-block">
                                    <p className="display-1">6</p>
                                    <p className="card-text">Average wait time/customer (mins)</p>
                                    <p className="card-text"><small className="text-muted">Last updated 1 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card mb-3">
                            <div className="card-header">
                                Branch Traffic (Real-Time)
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