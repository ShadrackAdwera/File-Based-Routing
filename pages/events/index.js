import { Fragment, useState, useEffect } from "react";
import { useRouter } from 'next/router';

import { getAllEvents } from '../../components/utils/api';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import useSWR from "swr";


const AllParties = (props) => {
const router = useRouter();
const [allParties, setAllParties] = useState(props.events);

const {data, error} = useSWR('https://react-refresher-37760-default-rtdb.firebaseio.com/meetups.json');

useEffect(()=>{
    if(data) {
        const transformedObject = [];
        for(const key in data) {
          transformedObject.push({id: key, ...data[key]});
        }
        setAllParties(transformedObject); 
    }
},[data]);

const onSubmitHandler = (month,year) => {
    router.push(`/events/${year}/${month}`)
}
if(error) {
    return <p className='centered'>An error occured.</p>
}

return <Fragment>
    <EventsSearch onSubmit={onSubmitHandler}/>
    {allParties && allParties.length>0? <EventList items={allParties}/> : <p className='centered'>Loading...</p>}
</Fragment>;
}

export default AllParties;

export async function getStaticProps() {
const allEvents = await getAllEvents();
return { props : { events: allEvents}}
}