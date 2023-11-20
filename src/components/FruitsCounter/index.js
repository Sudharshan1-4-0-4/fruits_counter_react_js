// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoescount: 0,
    bananascount: 0,
  }

  onMangoIncrement = () => {
    const {mangoescount} = this.state
    this.setState(prevState => ({mangoescount: prevState.mangoescount + 1}))
  }

  onBananaIncrement = () => {
    const {bananascount} = this.state
    this.setState(prevState => ({bananascount: prevState.bananascount + 1}))
  }

  render() {
    const {mangoescount, bananascount} = this.state

    return (
      <div className="background">
        <div className="inner-container">
          <h1>
            Bob ate <span className="cols">{mangoescount}</span> mangoes{' '}
            <span className="cols">{bananascount}</span> bananas
          </h1>
          <div className="img-container">
            <div className="imgs">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                type="button"
                className="btn"
                onClick={this.onMangoIncrement}
              >
                Eat Mango
              </button>
            </div>
            <div className="imgs">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                type="button"
                className="btn"
                onClick={this.onBananaIncrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
