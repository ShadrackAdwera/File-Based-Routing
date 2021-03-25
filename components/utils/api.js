export async function getAllEvents() {
  return fetch(
    'https://react-refresher-37760-default-rtdb.firebaseio.com/meetups.json'
  )
    .then((response) => response.json())
    .then((resData) => {
      const transformedObject = [];
      for (const key in resData) {
        transformedObject.push({ id: key, ...resData[key] });
      }
      return transformedObject;
    })
    .catch((error) => console.log(error));
}

export async function getFeaturedEvents() {
 const allEvents = await getAllEvents();
 const featuredEvents = allEvents.filter(
    (event) => event.isFeatured
  );
  return featuredEvents;
}

export async function getEventById(id) {
    const allEvents = await getAllEvents();
    return allEvents.find(event=>event.id===id);
}
export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}

