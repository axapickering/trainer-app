"use strict";

import ClientCard from "./ClientCard.js";
import  { Stack } from 'react-bootstrap';

const fakeClients = [
  "Theodore K.",
  "Marvin Heemeyer",
  "Tony Hawk",
  "Frieren",
  "Scrungadorus"
];

function ClientList({ clients=fakeClients }) {
  return <div className="clients-list-pane">
    <Stack gap={2} direction="horizontal" style={{maxWidth:'70%'}} className="mx-auto mb-4">
    {fakeClients.map(client => <ClientCard name={client}/>)}
    </Stack>
  </div>

}

export default ClientList;