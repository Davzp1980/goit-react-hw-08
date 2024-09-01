/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/selectors';

function ContactList() {
  const sortedContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.ul}>
      {sortedContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
