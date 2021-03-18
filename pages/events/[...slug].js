import { Fragment } from 'react';
import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import { getFilteredEvents } from '../../dummy-parties';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/events/error-alert';

const FilteredParties = () => {
  const router = useRouter();
  const filterQuery = router.query.slug;

  if (!filterQuery) {
    return <p className="center">Loading...</p>;
  }
   const numberedYear = +filterQuery[0];
   const numberedMonth = +filterQuery[1];

  if(isNaN(numberedYear) || isNaN(numberedMonth) || numberedYear > 2030 || numberedYear < 2021 || numberedMonth < 1 || numberedMonth > 12 ) {
    return <Fragment>
        <ErrorAlert>
        <p>Invalid filters!</p>
        </ErrorAlert>
        <div className='center'>
        <Button link='/events'>Go to All Events</Button>
        </div>
    </Fragment>;
  }
  const foundEvents = getFilteredEvents({year: numberedYear, month: numberedMonth});

  if(!foundEvents || foundEvents.length===0) {
      return <Fragment>
      <ErrorAlert>
      <p>No events found</p>
      </ErrorAlert>
      <div className='center'>
      <Button link='/events'>Go to All Events</Button>
      </div>
  </Fragment>;
  }

  const newDate = new Date(numberedYear, numberedMonth-1)

  return <Fragment>
      <ResultsTitle date={newDate}/>
      <EventList items={foundEvents}/>
  </Fragment>;
};
export default FilteredParties;
