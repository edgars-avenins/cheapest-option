import React from 'react'
import request from 'superagent'

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            cdData = []
        }
    }

    componentDidMount(){
        request.get('/countdown')
            .then(res => {
                console.log(res)
            })
    }

    render(){
        return (
            <h1>Hi</h1>
        )
    }
}

export default App