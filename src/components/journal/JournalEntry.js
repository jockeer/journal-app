import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry'>
        <div className="journal__entry-picture" style={{
            backgroundSize:'cover',
            height:'inherit',
            backgroundImage: 'url(https://tinypng.com/images/social/website.jpg)'
        }}>
        </div>

        <div className="journal__entry-body">
            <p className='journal__entry-title'>
                Un nuevo dia
            </p>
            <p className='journal__entry-content'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi.
            </p>
        </div>
        <div className="journal__entry-date-box">
            <span>Monday</span>
            <h5>28</h5>
        </div>
    </div>
  )
}
