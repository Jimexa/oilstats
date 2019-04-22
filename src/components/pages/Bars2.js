import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Axios from 'axios'
import '../../mystyle.css'



export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  state = {
    data: [ ]
  }

  componentDidMount(){
    Axios.get("https://api.myjson.com/bins/9ejxw")
    .then(res => this.setState({ data: res.data }, () => console.log(this.state.data)))
    // fetch('https://api.myjson.com/bins/7hjdg', {
    //   headers : { 
    //     'Accept': 'application/json'
    //    }

    // })
    // .then(function(response) {
    //   return response.json();
    // })
    // .then(function(myJson) {
    //   console.log(JSON.stringify(myJson));
    //   this.setState({ data: myJson });
    // });

  }

  render() {
    console.log(this.state.data)
    return (
      <div className="img">
        <h1 className="txt">This chart represents the oil supply of the EU for the year 2018</h1>
        <div className="recharts-wrapper">
        <BarChart
          width={1000}
          height={300}
          data={this.state.data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis tick={{ fill: 'white' }} dataKey="month" />
          <YAxis tick={{ fill: 'white' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="import" fill="#8884d8" />
          <Bar dataKey="consumption" fill="#82ca9d" />
          <Bar dataKey="production" fill="#1A3A3A" />
        </BarChart>
        </div>
        <br></br>
        <h5 className="txt">The numbers are presented in 1000 tonnes</h5>
      </div>
    );
  }
}
