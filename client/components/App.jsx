import React from 'react'
import { getShopData } from '../api/api'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            cdData: {},
            nwData: {},
            pksData: {},
            switch: false,
            nextData: false,
            nextnextData: false
        }
    }

    getData = (e) => {
        const shopName = e.target.value
        getShopData(shopName)
            .then(res => {
                console.log('Data Arrived')
                switch(shopName){
                    case 'countdown':
                        this.setState({
                            cdData: res,
                            switch: true
                        })
                        return

                    case 'newworld':
                        this.setState({
                            nwData: res,
                            nextData: true
                        })
                        return
                    
                    case 'paknsave':
                        this.setState({
                            pksData: res,
                            nextnextData: true
                        })
                        return
                    default:
                        return console.error('Error, invalid case')
                }
                
            })
    }

    clearString = (string) => {
        let badWordArr = ['Countdown', 'NZ', 'Butchery', 'Free', 'Farmed', 'Beak & Sons']
        return string.split(' ').map(word => {
            for(let i = 0; i < badWordArr.length; i++){
                if(word.includes(badWordArr[i])) return
            }
            return word
        }).join(' ') 
    }

    render() {
        const cdData = this.state.cdData
        const nwData = this.state.nwData
        const pksData = this.state.pksData
        return (
            <React.Fragment>

                {/* <button onClick={this.getData} value='countdown'><img src='countdown.png' /></button>
                <button onClick={this.getData} value='newworld'><img src='/newworld.jpeg' /></button>
                <button onClick={this.getData} value='paknsave'><img src='/paknsave.jpeg' /></button> */}
                <button onClick={this.getData} value='countdown'>CD</button>
                <button onClick={this.getData} value='newworld'>NW</button>
                <button onClick={this.getData} value='paknsave'>PkS</button>
                <div className='column'>
                {cdData && this.state.switch ?
                            <table >
                                <tbody>
                                    <tr>
                                        <td>Product</td>
                                        <td>Price</td>
                                    </tr>
                                    {cdData.map((item, i) => {
                                        return <tr key={i}>
                                            <td>{this.clearString(item.name)}</td>
                                            <td>{item.price}</td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                    : <h1>Data Loading, please wait...</h1>
                }
                            {this.state.nextData ? 
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Product</td>
                                            <td>Price</td>
                                        </tr>
                                        {nwData.map((item, i) => {
                                            return <tr key={i}>
                                                <td>{this.clearString(item.name)}</td>
                                                <td>{item.price}</td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            : <h1>Waiting for data</h1>
                            }              
                            {this.state.nextnextData ? 
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Product</td>
                                            <td>Price</td>
                                        </tr>
                                        {pksData.map((item, i) => {
                                            return <tr key={i}>
                                                <td>{this.clearString(item.name)}</td>
                                                <td>{item.price}</td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            : <h1>Waiting for data</h1>
                            }                                        
                                </div>
                       
            </React.Fragment>
        )
    }
}

export default App