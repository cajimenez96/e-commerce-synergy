/**
 *
 * Summary
 *
 */

import React from 'react';

import ReactStars from 'react-rating-stars-component';

import NotFound from '../../Common/NotFound';
import { ReviewIcon } from '../../Common/Icon';

const Summary = props => {
  const {
    reviewsSummary: { ratingSummary, totalRatings, totalReviews, totalSummary }
  } = props;

  const getRatingPercentage = value => {
    return parseFloat(percentage(value, totalSummary).toFixed(2));
  };

  const averageRating =
    totalRatings > 0 && Math.round(totalRatings / totalReviews);

  return (
    <div className='bg-white p-4 box-shadow-primary review-summary'>
      <h2 className='mb-0'>Valoración</h2>
      {averageRating && (
        <div className='d-flex flex-wrap align-items-center mt-2'>
          <ReactStars
            classNames='mr-2'
            size={17}
            edit={false}
            color={'#adb5bd'}
            activeColor={'#ffb302'}
            a11y={true}
            isHalf={true}
            emptyIcon={<i className='fa fa-star' />}
            halfIcon={<i className='fa fa-star-half-alt' />}
            filledIcon={<i className='fa fa-star' />}
            value={averageRating}
          />
          {totalReviews > 0 && <span>basado en {totalReviews} reseñas.</span>}
        </div>
      )}

      <hr style={{ border: '3px solid #f1f1f1' }} />
      {totalReviews > 0 ? (
        ratingSummary.map((r, obj) => (
          <div key={obj} className='d-flex align-items-center mb-2'>
            <div className='left'>
              <span>{parseInt(Object.keys(r)[0])} estrella</span>
            </div>
            <div className='middle'>
              <div className='bar-container'>
                <div
                  className={`bar-${parseInt(Object.keys(r)[0])}`}
                  style={{
                    width: `${getRatingPercentage(
                      parseInt(r[Object.keys(r)[0]])
                    )}%`
                  }}
                ></div>
              </div>
            </div>
            <div className='ml-2 right'>
              <span className='fw-medium'>
                {getRatingPercentage(parseInt(r[Object.keys(r)[0]]))}%
              </span>
            </div>
          </div>
        ))
      ) : (
        <NotFound>
          <ReviewIcon width='40' height='40' className='my-2' />
          <p className='mb-2'>Sé el primero en añadir una reseña.</p>
        </NotFound>
      )}
    </div>
  );
};

export default Summary;

function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
}
