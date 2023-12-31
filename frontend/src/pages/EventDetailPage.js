import EventItem from "../components/EventItem"
import { json,useLoaderData } from "react-router-dom"; 


function EventDetailPage() {
  const data=useLoaderData();


  return (
    <>
      <EventItem event={data.event}/>
    </>
  )
}

export default EventDetailPage;
export async function loader({request,params}){
  const id=params.eventId;
  const response = await fetch('http://localhost:8080/events/'+id);
  if(!response.ok){
    throw json({message:'could not fetch details for event'},{
      status:500
    })
  }
  else{
  return response;
  }


  
}
