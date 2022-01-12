import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../actions/contacts';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import { ListGroup, Spinner } from 'react-bootstrap';

const ListPage = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

    useEffect(() => {
        dispatch(getContacts());
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
                <div className='spinnerDiv d-flex justify-content-center align-items-center'>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )}
        </div>
    )
}

export default ListPage;
