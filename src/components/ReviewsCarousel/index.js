import './index.css'

const ReviewsCarousel = props => {
  const {eachReviewList, onClickLeftChange, onClickRightChange} = props
  const {imgUrl, username, companyName, description} = eachReviewList

  const changeLeftProfile = () => {
    onClickLeftChange()
  }

  const changeRightProfile = () => {
    onClickRightChange()
  }

  return (
    <>
      <li className="list-container">
        <img src={imgUrl} alt={username} className="profile-image" />
        <div className="name-button">
          <button
            onClick={changeLeftProfile}
            className="button"
            data-testid="leftArrow"
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <p className="username">{username}</p>
          <button
            onClick={changeRightProfile}
            className="button"
            data-testid="rightArrow"
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <div className="description-container">
          <p className="description">{description}</p>
        </div>
      </li>
    </>
  )
}

export default ReviewsCarousel
