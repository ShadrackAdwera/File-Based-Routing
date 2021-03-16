import EventItem from './event-item';

const EventList = props => {
    return <ul>
        {props.items.map((item, index)=><EventItem key={index}/>)}
    </ul>
}

export default EventList;