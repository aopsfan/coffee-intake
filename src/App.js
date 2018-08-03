import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      espressos: 0,
      lattes: 0,
      machiatos: 0
    }
  }

  //

  increment = (key, event) => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  }

  decrement = (key, event) => {
    this.setState(prevState => {
      return { [key]: prevState[key] - 1 };
    });
  }

  //

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Coffee Intake</h1>
        </header>
        <div className="button-container">
          <h1>How many cups a day?</h1>
        </div>
        <Table>
          <thead>
          <tr>
            <th />
            <th>Espressos</th>
            <th>Lattes</th>
            <th>Machiatos</th>
          </tr>
          <tr>
            <th>#</th>
            <th>
              <Button outline color="primary" onClick={e => this.increment('espressos', e)}>More!</Button>
              <Button outline style={{marginLeft:"10px"}} color="primary" onClick={e => this.decrement('espressos', e)}>Less</Button>
            </th>
            <th>
              <Button outline color="secondary" onClick={e => this.increment('lattes', e)}>More!</Button>
              <Button outline style={{marginLeft:"10px"}} color="secondary" onClick={e => this.decrement('lattes', e)}>Less</Button>
            </th>
            <th>
              <Button color="danger" onClick={e => this.increment('machiatos', e)}>More!</Button>
              <Button style={{marginLeft:"10px"}} color="danger" onClick={e => this.decrement('machiatos', e)}>Less</Button>
            </th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Count</th>
              <td>{this.state.espressos}</td>
              <td>{this.state.lattes}</td>
              <td>{this.state.machiatos}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
