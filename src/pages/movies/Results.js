import React from 'react'
import StarRatings from 'react-star-ratings';

const Results = ({data, movieName}) => {
  const boldMatched = (title, term) => {
     const regex = new RegExp(`(${term})`, 'gi');
     return title.replace(regex, '<strong>$1</strong>');
  }

  return (
    <div className='search-result'>
        {data?.map((d) => (
            <div className='item' key={d.id}>
                <div className='list-wraper'>
                    <span dangerouslySetInnerHTML={{ __html: boldMatched(d?.title, movieName) }}></span>
                    <span>{d?.category}</span>
                </div>
                <div>
                <span>
                <StarRatings
                    rating={d?.ratings}
                    starRatedColor="black"
                    numberOfStars={10}
                    name='rating'
                />
                </span>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Results