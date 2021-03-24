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

