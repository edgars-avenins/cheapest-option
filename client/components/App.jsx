import React from 'react'
import { getShopData } from '../api/api'

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            cdData: {},
            switch: false
        }
    }

    componentDidMount(){
        getShopData()
            .then(res => {
                console.log('Data Arrived')
                this.setState({
                    cdData: res,
                    switch: true
                })
            })
    }

    render(){
        const cdData = this.state.cdData
        console.log(this.state.cdData)
        return (
            <React.Fragment>
            {cdData && this.state.switch ? 
                <section>
                    <div className='column'>
                        {cdData.map((item, i) => {
                            return <span key={i}>
                                <h6>{item.name}</h6>
                                <p>Price: {item.price}</p>
                            </span>
                        })}
                    </div>
                </section>
                : <h1>Data Loading, please wait...</h1>
            }
            </React.Fragment>
        )
    }
}

export default App