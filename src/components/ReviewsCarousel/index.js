// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activePageId: 0,
  }

  onClickRightArrow = () => {
    const {activePageId} = this.state
    const {reviewsList} = this.props
    if (activePageId < reviewsList.length - 1) {
      this.setState(prevState => ({
        activePageId: prevState.activePageId + 1,
      }))
    }
  }

  onClickLeftArrow = () => {
    const {activePageId} = this.state

    if (activePageId > 0) {
      this.setState(prevState => ({
        activePageId: prevState.activePageId - 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="card">
        <img src={imgUrl} alt={username} />
        <p className="name">{username}</p>
        <p className="text">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {activePageId} = this.state
    const {reviewsList} = this.props
    const currentReview = reviewsList[activePageId]
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="container">
          <button
            type="button"
            className="button"
            onClick={this.onClickLeftArrow}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReview)}
          <button
            type="button"
            className="button"
            onClick={this.onClickRightArrow}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
