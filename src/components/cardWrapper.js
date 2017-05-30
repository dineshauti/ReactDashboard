import React from 'react'
import StatusCard from './statusCard'

var status = [
    {value: 29, message: 'New Accounts Opened', lastUpdated: '1 mins'},
    {value: 19, message: 'Loan Applications Recieved', lastUpdated: '1 mins'},
    {value: 0, message: 'Critical Issues', lastUpdated: '1 mins'},
    {value: 2, message: 'asdf', lastUpdated: '1 mins'}
]

function renderCards(cards) {
    return cards.map((card, index) => {
        return <StatusCard value={card.value} message={card.message} lastUpdated={card.lastUpdated} key={index}/>
    })
}

const CardWrapper = () => {
    let cards = renderCards(status)
    return (
        <div className="card-deck">
            {cards}
        </div>
    )
}

export default CardWrapper