import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-parties';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

const PartyDetails = () => {
    const router = useRouter();
    const foundEvent = getEventById(router.query.id);
    if(!foundEvent) {
        return <h5>No event found</h5>
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