import React from 'react'
import { Image } from 'react-bootstrap';

const contact = ({ contact }) => {
    return (
        <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex'>
                <Image roundedCircle src={contact.picture.medium} className='contactThumbnail'></Image>
                <div className='d-flex flex-column'>
                    <span>{contact.name.first} {contact.name.last}</span>
                    <span className='text-muted'>{contact.email}</span> 
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
            </svg>
        </div>
    )
}

export default contact;
