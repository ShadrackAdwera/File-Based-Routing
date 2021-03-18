import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import { getFilteredEvents } from '../../dummy-parties';

const FilteredParties = () => {
  const router = useRouter();
  const filterQuery = router.query.slug;

  if (!filterQuery) {
    return <p className="center">Loading...</p>;
  }
   const numberedYear = +filterQuery[0];
   const numberedMonth = +filterQuery[1];

  if(isNaN(numberedYear) || isNaN(numberedMonth) || numberedYear > 2030 || numberedYear < 2021 || numberedMonth < 1 || numberedMonth > 12 ) {
    return <p className='center'>Invalid filters!</p>
  }
  const foundEvents = getFilteredEvents({year: numberedYear, month: numberedMonth});

  if(!foundEvents || foundEvents.length===0) {
      return <p className='center'>No Events Found</p>;
  }

  return <EventList items={foundEvents}/>;
};
export default FilteredParties;
