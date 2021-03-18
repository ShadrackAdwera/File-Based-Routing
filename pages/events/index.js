import { Fragment } from "react";
import { useRouter } from 'next/router';

import { getAllEvents } from "../../dummy-parties";
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';


const AllParties = () => {
const router = useRouter();
const allParties = getAllEvents();

const onSubmitHandler = (month,year) => {
    router.push(`/events/${year}/${month}`)
}

return <Fragment>
    <EventsSearch onSubmit={onSubmitHandler}/>
    <EventList items={allParties}/>
</Fragment>;
}

export default AllParties;