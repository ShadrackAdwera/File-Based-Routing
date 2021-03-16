import { getFeaturedEvents } from "../dummy-parties";


export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return <div>
    <p>Featured Events</p>
  </div>;
}
