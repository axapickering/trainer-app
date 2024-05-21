"use strict";

import "./ClientMilestones.css";
import Milestone from "./Milestone";

const fakeMilestones = [
  {
  date : '2/18/21',
  text : 'Stayed in a calorie deficit for one week'
  },
  {
  date : '3/05/21',
  text : 'Ran a mile in under 9 minutes'
  },
  {
  date : '3/24/21',
  text : 'Walked 4 miles in one day'
  },
  {
  date : '3/18/21',
  text : '600lb Back squat'
  },

];



function ClientMilestones( { milestones=fakeMilestones }) {
  return <div className="client-milestones-pane bg-light rounded p-3">

    <h2>Milestones</h2>
    {fakeMilestones.map(({ date, text }) => <Milestone date={date} text={text}/>)}
    {
  }

  </div>
}

export default ClientMilestones;