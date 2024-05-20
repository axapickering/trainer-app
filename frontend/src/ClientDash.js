"use strict";
import ClientWorkouts from "./ClientWorkouts";
import ClientProgressGraph from "./ClientProgressGraph";
import ClientPRs from "./ClientPRs";

function ClientDash() {
  return <div>
    <h1 style={{margin:"2%"}}> [CLIENT]'s dashboard </h1>
    <ClientWorkouts />
    <ClientProgressGraph/>
    <ClientPRs/>
  </div>
}

export default ClientDash;