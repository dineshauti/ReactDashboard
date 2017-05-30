import React from 'react'
import PropTypes from 'prop-types'

class StatusCard extends React.Component {
    render() {
        return(
            <div className="card text-center mb-3">
                <div className="card-block">
                    <p className="display-1">{this.props.value}</p>
                    <p className="card-text">{this.props.message}</p>
                    <p className="card-text"><small className="text-muted">Last updated {this.props.lastUpdated} ago</small></p> 
                </div>
            </div>
        )
    }
}

StatusCard.PropTypes = {
    value: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    lastUpdated: PropTypes.string.isRequired
}

export default StatusCard