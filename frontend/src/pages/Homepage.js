import React from "react";
// import { defer } from "react-router-dom";
import "./Homepage.css"; // Import the CSS file

const dummyData = [
  {id:"p1",title:'1st event'},
  {id:"p2",title:'2nd event'},
  {id:"p3",title:'3rd event'},
  {id:"p4",title:'4th event'},
  {id:"p5",title:'5th event'},

  
];

function Homepage() {
  return (
    <div>
      <h1>Upcoming Events</h1>
      <ul>
        {dummyData.map((event) => (
          <li key={event.id}>
            {event.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Homepage;
