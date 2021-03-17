import EventItem from './event-item';

const EventList = props => {
    return <ul>
        {props.items.map((item, index)=><EventItem key={index} 
        id={item.id} 
        image={item.image} 
        title={item.title} 
        date={item.date} 
        location={item.location} />)}
    </ul>
}

export default EventList;