"use strict";
import './ClientDash.css';
import ClientWorkouts from "./ClientWorkouts";
import ClientProgressGraph from "./ClientProgressGraph";
import ClientMilestones from "./ClientMilestones";

function ClientDash() {
  return <div>
    <h1 className='client-dash-name'>[CLIENT] dashboard</h1>
    <ClientWorkouts />
    <ClientProgressGraph/>
    <ClientMilestones/>
  </div>
}

export default ClientDash;