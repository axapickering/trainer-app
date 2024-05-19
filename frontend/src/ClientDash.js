"use strict";
import ClientWorkouts from "./ClientWorkouts";
import ClientProgressGraph from "./ClientProgressGraph";
import ClientPRs from "./ClientPRs";

function ClientDash() {
  return <div>
    <p> This is the client dashboard </p>
    <ClientWorkouts />
    <ClientProgressGraph/>
    <ClientPRs/>
  </div>
}

export default ClientDash;