import EventItem from './event-item';
import styles from './event-list.module.css';

const EventList = props => {
    return <ul className={styles.list}>
        {props.items.map((item, index)=><EventItem key={index} 
        id={item.id} 
        image={item.image} 
        title={item.title} 
        date={item.date} 
        location={item.location} />)}
    </ul>
}

export default EventList;