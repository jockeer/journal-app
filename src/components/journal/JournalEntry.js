import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { activeNote } from '../../helpers/notes'

export const JournalEntry = ({ id, date, title, body, url}) => {
    const noteDate = moment(date)
    const dispatch = useDispatch()

    const handleActive = () => {
        dispatch(activeNote( id, { date, title, body, url} ))
    }

    return (
        <div className='journal__entry' onClick={handleActive}>
            {
                url &&
                <div className="journal__entry-picture" style={{
                    backgroundSize:'cover',
                    height:'inherit',
                    backgroundImage: `url(${url})`
                }}></div>
            }
            

            <div className="journal__entry-body">
                <p className='journal__entry-title'>
                    {title}
                </p>
                <p className='journal__entry-content'>
                    {body}
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')}</span>
                <h5>{noteDate.format('Do')}</h5>
            </div>
        </div>
    )
}
