import { ReviewSelectRating, ReviewSelectLabel } from '../style'

import { ratingData } from '../ratingData'

const ReviewSelectBox = ({ onRadioChange, selectedRating }) => {
  return (
    <ReviewSelectRating>
      <ul>
        {ratingData.map((rating, index) => {
          return (
            <li key={index}>
              <ReviewSelectLabel
                htmlFor={rating.value}
                className={selectedRating === rating.value ? 'active' : ''}
              >
                <div>
                  <rating.svg />
                </div>
                <p>별로에요</p>
              </ReviewSelectLabel>
              <input
                type='radio'
                id={rating.value}
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
