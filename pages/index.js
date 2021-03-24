import { useEffect, useState } from 'react';
import EventList from '../components/events/event-list';
import useSWR from 'swr';

export default function Home(props) {
  const [allFeatured, setAllFeatured] = useState(props.events);

  const { data, error } = useSWR('https://react-refresher-37760-default-rtdb.firebaseio.com/meetups.json');

  useEffect(()=>{
    const transformedObject = [];
    if(data) {
      for(const key in data) {
        transformedObject.push({id:key, ...data[key]});
      }
      const featuredEvents = transformedObject.filter(event=>event.isFeatured===true);
      setAllFeatured(featuredEvents);
    }
  },[data]);

  if(error) {
    return <p className='centered'>AN error occured</p>;
  }

  return allFeatured.length===0? <p className='centered'>Loading...</p> : <EventList items={allFeatured}/>;
}

export async function getStaticProps() {
  return fetch('https://react-refresher-37760-default-rtdb.firebaseio.com/meetups.json')
  .then(response=>response.json())
  .then(resData=>{
    const transformedObject = [];
    for(const key in resData) {
      transformedObject.push({id: key, ...resData[key]});
    }
    const featuredEvents = transformedObject.filter(event=>event.isFeatured===true);
    return { props : { events: featuredEvents}}
  }).catch(error=>console.log(error));
}
