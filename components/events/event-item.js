import Link from 'next/link';
import styles from './event-item.module.css';

const EventItem = props => {
    return <li className={styles.item}>
        <img src={`/${props.image}`} alt={props.title}/>
        <div className={styles.content}>
            <div className={styles.summary}>
            <h2>{props.title}</h2>
            <div className={styles.date}>
                <time>{new Date(props.date).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month:'long',
                    year:'numeric'
                })}</time>
            </div>
            <div className={styles.address}>
                <address>{props.location.replace(', ','\n')}</address>
            </div>
            </div>
            <div className={styles.actions}>
            <Link href={`/events/${props.id}`}>Explore Event</Link>      
            </div>
        </div>
    </li>
}

export default EventItem;