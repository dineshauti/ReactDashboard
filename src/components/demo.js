import React from 'react'
import axios from 'axios'

class Demo extends React.Component {

    fetchData = () => {
        var url = 'http://localhost:8000/data'
        var config  = {
            headers: {'Access-Control-Allow-Origin' : '*'}
        }

        axios.get(url, config)
            .then(function(response){
                console.log(response.data.length)
            });  

    }

    render() {
        return (
            <div>{this.fetchData()}</div>
        )
    }
   
}

export default Demo
