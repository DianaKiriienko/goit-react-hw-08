import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice'
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css"

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  
    return (
        <div>
            <h2 >Contact List</h2>
            <ul className={styles.list}>
                {filteredContacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
                ))}            
            </ul>
        </div>
    )
};

export default ContactList;