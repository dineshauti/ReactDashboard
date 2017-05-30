import React from 'react'
import PropTypes from 'prop-types'

const StatusCard = ({value, message, lastUpdated}) => {
    return(
        <div className="card text-center mb-3">
            <div className="card-block">
                <p className="display-1">{value}</p>
                <p className="card-text">{message}</p>
                <p className="card-text"><small className="text-muted">Last updated {lastUpdated} ago</small></p> 
            </div>
        </div>
    )
}

StatusCard.PropTypes = {
    value: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    lastUpdated: PropTypes.string.isRequired
}

export default StatusCard