import Link from 'next/link';

const EventItem = props => {
    return <li>
        <img src={`/${props.image}`} alt={props.title}/>
        <div>
            <div>
            <h2>{props.title}</h2>
            <div>
                <time>{new Date(props.date).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month:'long',
                    year:'numeric'
                })}</time>
            </div>
            <div>
                <address>{props.location.replace(', ','\n')}</address>
            </div>
            </div>
            <div>
            <Link href={`/events/${props.id}`}>Explore Event</Link>      
            </div>
        </div>
    </li>
}

export default EventItem;