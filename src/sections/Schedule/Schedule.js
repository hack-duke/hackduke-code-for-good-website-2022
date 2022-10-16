import React from "react";
import "./Schedule.css";

const Schedule = () => {
  return (
    <div id="schedule" className="schedule">
   <h2>Schedule:</h2>
   <div class="row">
      <div class="column">
         <div class = "date">Satuday, October 22</div>
         <div class="row">
            <div class="column">
              <div class ="time-place">9:00-10:30 am</div>
              <div class ="time-place">11:00-11:15 am</div>
              <div class ="time-place">11:15 am -12:15 pm</div>
              <div class ="time-place">12:15-1:00 pm</div>
              <div class ="time-place">1:00-2:00 pm</div>
              <div class ="time-place">2:00-3:00 pm</div>
              <div class ="time-place">3:00-4:00 pm</div>
              <div class ="time-place">4:00-5:00 pm</div>
              <div class ="time-place">5:00-6:00 pm</div>
              <div class ="time-place">6:00-7:00 pm</div>
              <div class ="time-place">7:00-8:00 pm</div>
              <div class ="time-place">8:30-11:00 pm</div>
              <div class ="time-place">11:00-11:45 pm</div>
            </div>
            <div class="column">
            <div class ="time-place">Student Check-in</div>
            <div class ="time-place">Opening Ceramony</div>
            <div class ="time-place">Opening Keynote</div>
            <div class ="time-place">Lunch</div>
            <div class ="time-place">Ideation Workshop and Sponsor Fair</div>
            <div class ="time-place">Environment and Inequality Track Talks</div>
            <div class ="time-place">Health and Education Track Talks</div>
            <div class ="time-place">Puppy Kindergarten!</div>
            <div class ="time-place">UI/UX Design Workshop</div>
            <div class ="time-place">Dinner</div>
            <div class ="time-place">Mixer for Female-identifying and Non-binary Hackers</div>
            <div class ="time-place">Social Events</div>
            <div class ="time-place">Spicy Noodle Challenge</div>
            </div>
         </div>
         
      </div>
      <div class="column">
         <div class = "date">Sunday, October 23</div>
         <div class="row">
            <div class="column">
            <div class ="time-place">12:00-1:00 am</div>
              <div class ="time-place">9:00-10:00 am</div>
              <div class ="time-place">11:00-12:00 pm</div>
              <div class ="time-place">12:30 pm</div>
              <div class ="time-place">1:00-2:00 pm</div>
              <div class ="time-place">2:00-4:30 pm</div>
              <div class ="time-place">5:00-6:00 pm</div>
              <div class ="time-place">6:00-6:30 pm</div>
            </div>
            <div class="column">
            <div class ="time-place">Midnight Snack</div>
            <div class ="time-place">Breakfast</div>
            <div class ="time-place">Lunch</div>
            <div class ="time-place">Hacking Ends</div>
            <div class ="time-place">Pitching Workshop</div>
            <div class ="time-place">Judging</div>
            <div class ="time-place">Closing Keynote</div>
            <div class ="time-place">Closing Ceremony</div>
            </div>
         </div>
      </div>
   </div>
</div>
  );
};

export default Schedule;
