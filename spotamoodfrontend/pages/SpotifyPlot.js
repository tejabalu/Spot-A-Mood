import React, { Component } from "react";
import Plot from "react-plotly.js";

class SpotifyPlot extends Component {
  // Sets up the states for loading data
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  // Call API upon component mount
  componentDidMount() {
    const endpoint = "JSON FILE GOES HERE";

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
      });
  }

  // Change data structure
  transformData(data) {
    let plot_data = [];

    let x = [];
    let y = [];
    data.map((each) => {
      x.push(each.date_of_interest);
      y.push(each.case_count);
    });
    plot_data["x"] = x;
    plot_data["y"] = y;

    console.log(plot_data);

    return plot_data;
  }

  render() {
    return (
      <div>
        <Plot
          data={[
            {
              type: "radar",
              mode: "lines",
              x: this.transformData(this.state.data)["x"],
              y: this.transformData(this.state.data)["y"],
              marker: { color: "#ed022d" },
            },
          ]}
          layout={{ width: 1000, height: 500, title: "Covid Case Count" }}
        />
      </div>
    );
  }
}

export default SpotifyPlot;
