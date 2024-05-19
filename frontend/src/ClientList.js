"use strict";

import ClientCard from "./ClientCard.js";

const fakeClients = [
  "Tom Ato",
  "Anne Chovy",
  "Sarah Deen",
  "Drim Grimsby",
  "Scrungadorus"
];

function ClientList({ clients=fakeClients }) {
  return <div className="clients-list-pane">
    {fakeClients.map(client => <ClientCard name={client}/>)}
  </div>

}

export default ClientList;