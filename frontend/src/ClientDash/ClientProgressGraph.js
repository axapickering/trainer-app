"use strict";

import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./ClientProgressGraph.css";
import fakeClientData from "./fakeClientData.json";

function ClientProgressGraph() {
  return <div className="client-progress-graph bg-light p-4 rounded">

    <Line
    data = {{
      labels: fakeClientData.map((data) => data.label),
      datasets: [
        {
          label: "Body weight",
          data: fakeClientData.map((data) => data.bodyweight),
          backgroundColor: "#064FF0",
          borderColor: "#064FF0",
        }
      ]
    }}
    options ={{
      y: {
        min: 150
      }}}
      />

  </div>
}

export default ClientProgressGraph;