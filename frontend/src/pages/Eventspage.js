// import { Link } from "react-router-dom"
// const DUMMY_EVENTS=[
//     {id:'1',name:'Cultural Festival'},
//     {id:'2',name:'Dance Festival'},
//     {id:'3',name:'Summer Festival'},
//     {id:'4',name:'Winter Festival'},

// ]

// function Eventspage() {
//   return (
//     <div>
//       <h1>Events Page</h1>
//       <ul>
//       {DUMMY_EVENTS.map((event)=>(
//         <li key={event.id}>
//           <Link to={event.id}>{event.name}</Link>
//         </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Eventspage


import {  useLoaderData } from 'react-router-dom';   

import EventsList from '../components/EventsList';

function EventsPage() {



    const data=useLoaderData();

    if(data.isError){
        return <p>{data.message}</p>
    }
    const events=data.events;
  
  return (
    <>
     <EventsList events={events} />
    </>
  );
}

export default EventsPage;
export async function loader(){
    
        const response = await fetch("http://localhost:8080/events");

        if (!response.ok) {
            return {isError:true,message:'Could not fetch data'};
            //...
        } else {
          return response;
        }
}