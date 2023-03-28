import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contact-selectors';

import { deleteContact } from 'redux/contacts/contact-slice';
import { BtnList, Contact, Item, List, Number } from './ContactList.styled';

const ContactsList = () => {

    const filteredContacts = useSelector(getFilteredContacts);

    const dispatch = useDispatch();

    const handleDeleteContact = id => {
        dispatch(deleteContact(id));
    };

    const elements = filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
            <Contact> {name}:
                <Number>{number}</Number>{' '}
            </Contact>
            <BtnList type='button' onClick={() => handleDeleteContact(id)}>Delete</BtnList>
        </Item>
    ));
    return <List>{elements}</List>
};

export default ContactsList;