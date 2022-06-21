import "./App.css";
import { Calendar, dateFnsLocalizer,DateLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const locales = {
  "en-US": require("date-fns/locale/en-US")
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const events = [
  {
    title: "coffee with Aim meeting",
    allDay: true,
    start: "2022,6,1",
    end:   "2022,6,2"
  },

  {
    title: "project meeting with desigine",
    start: "2022,6,22",
    end: "2022,6,23"
  },

  {
    title: "Developer meeting at coffee house",
    start: "2022,6,10",
    end: "2022,6,11"
  },

  {
    title: "project review meeting",
    start: "2022,6,7",
    end: "2022,6,8"
  },

  {
    title: "meeting with developer",
    start: "2022,6,24",
    end:"2022,6,25"
  }
];

function App() {

  const [newEvent, setNewEvent] = useState({title:"" , start: "", end: "" })
  const [allEvents, setAllEvents] = useState(events)
  const [showForm,setShowForm]= useState(false)

  function handleAddEvent (){
    setAllEvents([...allEvents,newEvent])
  }


  return (
    <>
   
      <div className="App">
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
  
      <div>
        <input type="text" placeholder= "Add Title" style = {{width:"20%", marginRight : "10px"}}
        value={newEvent.title} onClick={handleAddEvent}  onChange={(e) => setNewEvent({...newEvent,title: e.target.value})} 
         ></input>
         <DatePicker placeholderText="Start Date" style ={{marginRight:"10px" }}
         selected={newEvent.start} onClick={handleAddEvent}  onChange={(start) => setNewEvent({...newEvent,start})}/>
        <DatePicker placeholderText="End Date" 
         selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent,end})}/>
         <button style={{marginTop:"10px"}}  onClick={handleAddEvent} >Add Event</button>
          
      </div>
      
      
        <Calendar 
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px" }}
         
        />
        
      </div>

    </>
  );
}

export default App;