import React from 'react'

class StatusCard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            cardNumber: '',
            cardMessage: '',
            lastUpdatedTime: '',
            cardColor: ''
        }
    }

    

    render() {
        return(
            <div id="statusCard">
                <div className="card-deck">
                    <div className="card card-success text-center mb-3">
                        <div className="card-block">
                            <p className="display-1">29</p>
                            <p className="card-text">New accounts opened</p>
                            <p className="card-text"><small className="text-muted">Last updated 1 mins ago</small></p> 
                        </div>
                    </div>
                    <div className="card card-warning text-center mb-3">
                        <div className="card-block">
                            <p className="display-1">19</p>
                            <p className="card-text">Loan application received</p>
                            <p className="card-text"><small className="text-muted">Last updated 1 mins ago</small></p> 
                        </div>
                    </div>
                    <div className="card card-info text-center mb-3">
                        <div className="card-block">
                            <p className="display-1">0</p>
                            <p className="card-text">Critical issues</p>
                            <p className="card-text"><small className="text-muted">Last updated 1 mins ago</small></p> 
                        </div>
                    </div>
                </div>
            </div>           
        )
    }
}

export default StatusCard