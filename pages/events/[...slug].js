import { Fragment } from 'react';
//import { useRouter } from 'next/router';
import Head from 'next/head';

import EventList from '../../components/events/event-list';
import { getFilteredEvents } from '../../components/utils/api';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/events/error-alert';

const FilteredParties = (props) => {
  //const router = useRouter();
  //const filterQuery = router.query.slug;
  const { hasError, filteredEvents, year, month } = props;

  // if (!filterQuery) {
  //   return <p className="center">Loading...</p>;
  // }
  //  const numberedYear = +filterQuery[0];
  //  const numberedMonth = +filterQuery[1];
  const newDate = new Date(year, month-1)

  const pageHead = <Head>
  <title>Found Parties</title>
  <meta name='description' content={`All Parties for ${month}/${year}.`}/>
</Head>;

  if(hasError) {
    return <Fragment>
      {pageHead}
        <ErrorAlert>
        <p>Invalid filters!</p>
        </ErrorAlert>
        <div className='center'>
        <Button link='/events'>Go to All Events</Button>
        </div>
    </Fragment>;
  }
  //const foundEvents = getFilteredEvents({year: numberedYear, month: numberedMonth});

  if(!filteredEvents || filteredEvents.length===0) {
      return <Fragment>
        {pageHead}
      <ErrorAlert>
      <p>No events found</p>
      </ErrorAlert>
      <div className='center'>
      <Button link='/events'>Go to All Events</Button>
      </div>
  </Fragment>;
  }


  return <Fragment>
    {pageHead}
      <ResultsTitle date={newDate}/>
      <EventList items={filteredEvents}/>
  </Fragment>;
};
export default FilteredParties;

export async function getServerSideProps(context) {
  const { params } = context;
  const filteredData = params.slug;
  const year = +filteredData[0];
  const month = +filteredData[1];

  if(isNaN(year) || isNaN(month) || year > 2030 || year < 2021 || month < 1 || month > 12 ) { 
    return {
      hasError: true 
      // notFound: true, 
    // redirect: {destination: '/error-page'}
    }
  }
  const filteredEvents = await getFilteredEvents({year, month});

  return { props: {filteredEvents: filteredEvents, year: year, month: month} };
}
