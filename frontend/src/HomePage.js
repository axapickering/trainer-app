"use strict";

import { Link } from "react-router-dom";

function HomePage() {
  return <div>
    <Link to="/trainer">
      Login as trainer</Link>
  </div>;
}

export default HomePage;