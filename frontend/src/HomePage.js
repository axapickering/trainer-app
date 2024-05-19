"use strict";

import { Link } from "react-router-dom";

function HomePage() {
  return <div>
    <Link to="/trainer">Login as trainer</Link>
    <br/>
    <Link to="/client">Login as client</Link>
  </div>;
}

export default HomePage;