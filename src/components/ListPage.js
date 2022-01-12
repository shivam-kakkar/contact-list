import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getContacts } from '../actions/contacts';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import { Container, ListGroup } from 'react-bootstrap';

const ListPage = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

    useEffect(() => {
        dispatch(getContacts());
    }, [])

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=10&seed=41768d5e17252a34")
            .then(result => console.log(result));
    }, [])

    return (
        <div>
            {contacts.length !== 0 ? (
                    <ListGroup variant='flush'>
                        {contacts.map(contact => (
                            <Link to={`contact/${contact.login.uuid}`} key={contact.login.uuid} className='contactLink'>
                                <ListGroup.Item>
                                    <Contact contact={contact} />
                                </ListGroup.Item>
                            </Link>
                        ))}
                    </ListGroup>
            ) : (
            <div>
                <p>No Contacts</p>
            </div>
            )}
        </div>
    )
}

export default ListPage;
