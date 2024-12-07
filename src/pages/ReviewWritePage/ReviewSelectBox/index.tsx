import { ReviewSelectRating, ReviewSelectLabel } from '../style'

import { ratingData } from '../ratingData'

const ReviewSelectBox = ({ onRadioChange, selectedRating }) => {
  return (
    <ReviewSelectRating>
      <ul>
        {ratingData.map((rating, index) => {
          const imgSrc = rating.svg
          return (
            <li key={index}>
              <ReviewSelectLabel
                htmlFor={rating.text}
                className={selectedRating === rating.text ? 'active' : ''}
              >
                <div>
                  <img
                    src={imgSrc}
                    alt={rating.text}
                  />
                </div>
                <p>{rating.text}</p>
              </ReviewSelectLabel>
              <input
                type='radio'
                id={rating.text}
                name='review_rating'
                style={{ display: 'none' }}
                onChange={(e) => {
                  onRadioChange(e)
                }}
              />
            </li>
          )
        })}
      </ul>
    </ReviewSelectRating>
  )
}

export default ReviewSelectBox
