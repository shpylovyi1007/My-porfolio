import styles from "./page.module.css";
import contacts from './contacts.json'

const Home = () => {
  return (
    <div className={styles.page}>
      <ul >
        {contacts.map((contact) => {
          return <li key={contact.id}>
            <h1>{contact.name}</h1>
          </li>
        }) }
        
       
      </ul>
    </div>
  );
};

export default Home;
