"use strict";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
  return <div>
    <Link to="/trainer"><Button variant="primary" style={{margin:"1%"}}>Sign in as a trainer</Button></Link>
    <br/>
    <Link to="/client"><Button variant="primary" style={{margin:"1%"}}>Sign in as a client</Button></Link>
    <br/>
    <Link to="/fakeclient"><Button variant="primary" style={{margin:"1%"}}>Sign in as a fake client</Button></Link>
  </div>;
}

export default HomePage;