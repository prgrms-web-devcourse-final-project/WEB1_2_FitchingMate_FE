import { ReviewSelectRating, ReviewSelectLabel } from '../style'

import { ratingData } from '../ratingData'

const ReviewSelectBox = ({ onRadioChange, selectedRating }) => {
  return (
    <ReviewSelectRating>
      <ul>
        {ratingData.map((rating, index) => {
          const SvgComponent = rating.svg
          return (
            <li key={index}>
              <ReviewSelectLabel
                htmlFor={rating.text}
                className={selectedRating === rating.text ? 'active' : ''}
              >
                <div>
                  <SvgComponent />
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
