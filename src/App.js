import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      consumption: {
        'Expresso': 0,
        'Latte': 0,
        'Machiato': 0,
      }
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(coffee, ev) {
    let consumption = this.state.consumption
    consumption[coffee] += 1
    this.setState({
      consumption
    })
  }

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
              <th>#</th>
              <th>
                <Button outline color="primary" onClick={(ev) => this.handleClick('Expresso', ev)}>Expresso</Button>
              </th>
              <th>
                <Button outline color="secondary" onClick={(ev) => this.handleClick('Latte',ev)}>Latte</Button>
              </th>
              <th>
                <Button color="danger" onClick={(ev) => this.handleClick('Machiato',ev)}>Machiato</Button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Count</th>
              <td>{this.state.consumption['Expresso']}</td>
              <td>{this.state.consumption['Latte']}</td>
              <td>{this.state.consumption['Machiato']}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
