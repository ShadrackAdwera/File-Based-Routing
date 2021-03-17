import { getFeaturedEvents } from "../dummy-parties";
import EventList from '../components/events/event-list';


export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return <EventList items={featuredEvents}/>;
}
