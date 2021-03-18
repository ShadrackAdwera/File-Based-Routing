import { Fragment } from "react";
import { getAllEvents } from "../../dummy-parties";
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';


const AllParties = () => {
const allParties = getAllEvents();

return <Fragment>
    <EventsSearch />
    <EventList items={allParties}/>
</Fragment>;
}

export default AllParties;