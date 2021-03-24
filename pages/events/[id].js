import { Fragment } from 'react';
import { getEventById, getAllEvents } from '../../components/utils/api';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/events/error-alert';

const PartyDetails = (props) => {
    const { foundEvent } = props;
    
    if(!foundEvent) {
        return <ErrorAlert>
            <h5>No event found</h5>
        </ErrorAlert>
    }
    return <Fragment>
        <EventSummary title={foundEvent.title}/>
        <EventLogistics date={foundEvent.date} 
        address={foundEvent.location} 
        image={foundEvent.image} 
        imageAlt={foundEvent.title}/>
        <EventContent>
            <p>{foundEvent.description}</p>
        </EventContent>
    </Fragment>;
}

export default PartyDetails;

export async function getStaticProps(context) {
    const { params } = context;
    const event = await getEventById(params.id);
    return {props: { foundEvent: event }};
}

export async function getStaticPaths() {
    const allEvents = await getAllEvents();
    const ids = [];
    for(const event of allEvents) {
        ids.push({params: {id: event.id}});
    }
    return { paths: ids, fallback: 'blocking' };
}