import { Component } from "react";
import Plot from "react-plotly.js";

class SpotifyPlot extends Component {
  // Sets up the states for loading data
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render() {
    return (
      <div>
        <Plot
          data={[
            {
              type: "radar",
              mode: "lines",
              //   x: this.transformData(this.state.data)["x"],
              //   y: this.transformData(this.state.data)["y"],
              marker: { color: "#ed022d" },
            },
          ]}
          layout={{ width: 1000, height: 500, title: "" }}
        />
      </div>
    );
  }
}
