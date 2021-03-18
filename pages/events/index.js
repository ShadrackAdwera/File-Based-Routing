import { getAllEvents } from "../../dummy-parties";
import EventList from '../../components/events/event-list';


const AllParties = () => {
const allParties = getAllEvents();

return <EventList items={allParties}/>;
}

export default AllParties;