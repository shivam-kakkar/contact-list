import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../actions/contacts';
import { useParams, Link } from 'react-router-dom';
import { Image, Spinner, ListGroup } from 'react-bootstrap';

const DetailPage = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);
    const [contact, setContact] = useState(null);

    let { id } = useParams();

    useEffect(() => {
        dispatch(getContacts());
    }, [])

    useEffect(() => {
        console.log(contacts);
        const currentContact = contacts.find(e => e.login.uuid === id);
        setContact(currentContact);
    }, [contacts])

    return contact ?  (
            <div>
                <p className='m-2'><Link to={"/"}><i class="bi bi-arrow-left"></i></Link></p>
                <div className='d-flex flex-column w-100 p-5 justify-content-center align-items-center'>
                    <Image className='contactImage' roundedCircle src={contact.picture.large}></Image>
                    <h1 style={{ marginTop: "15px" }} className='text-secondary'>{contact.name.first} {contact.name.last}</h1>
                </div>
                <ListGroup>
                    <ListGroup.Item><i class="bi bi-telephone myIcons"></i> {contact.phone}</ListGroup.Item>
                    <ListGroup.Item><i class="bi bi-phone myIcons"></i> {contact.cell}</ListGroup.Item>
                    <ListGroup.Item><i class="bi bi-envelope myIcons"></i> {contact.email}</ListGroup.Item> 
                    <ListGroup.Item><i class="bi bi-geo-alt myIcons"></i> {contact.location.city}, {contact.location.state}, {contact.location.country}</ListGroup.Item>
                </ListGroup>
            </div>
        ) : (
            <div className='spinnerDiv d-flex justify-content-center align-items-center'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
}

export default DetailPage;
