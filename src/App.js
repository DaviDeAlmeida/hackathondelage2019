import React, { Component , useRef} from 'react';
import axios from 'axios';
import SideBar from '../src/SideBar';
import './App.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { 
  Button, 
  Input, 
  Sidebar, 
  Header, 
  Icon, 
  Image, 
  Menu, 
  Segment,
  Card} 
  from 'semantic-ui-react'
  
class App extends Component {

  constructor(){
    super();
    this.input = React.createRef();
    this.state = {
      name: '',
      uv: 0,
    }
  }

  receiveFile = async (e) => {
 
    debugger;
    
    const file = e.target.files[0];
 
    const formData = new FormData();
 
    formData.append('file', file);
 
    const res = await axios.post("https://localhost:44339/api/planilha/uploadplanilha", formData, {
      headers: {'Content-Type': 'multipart/form-data'}
    });

    debugger;
    
    const dados = Object.keys(res.data.produtividade).map((key) => ({
      name: key,
      uv: res.data.produtividade[key]
    }))

    this.setState({lista: dados})
    
    debugger;
 
  }

  render() {

    return ( 
      <div>
        {/* <SideBar></SideBar> */}
        <LineChart
        width={500}
        height={300}
        data={}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
       
        <input
          ref={(ref) => this.input = ref}
          type="file"         
          onChange={(e) => this.receiveFile(e)}
        />                  
      </div>
    );
  }
}

export default App;
