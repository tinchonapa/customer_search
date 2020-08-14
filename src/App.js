import React, { Component } from 'react';
// import CustomerForm from './CustomerForm.jsx';
import CustomerList from './CustomerList.jsx';
// import VehicleForm from './VehicleForm.jsx';
// import VehicleList from './VehicleList.jsx';
// import ReservationForm from './ReservationForm.jsx';
// import ReservationList from './ReservationList.jsx';
import Search from './Search.js';
import { customers } from './customers4.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
        customers: customers,
        searchfield: ''
    }
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
    // console.log(event.target.value)
  }

  render() {

    const filteredCustomers = this.state.customers.filter(customers => {
      return customers.last_name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });

    return (
      <div className="App">
        <div className="header" >
          <h1>Reservation Form</h1>
          <Search searchChange={this.onSearchChange}/>
          <div className="btn-group">
            <button type="button" className="btn btn-primary">Home</button>
            <button type="button" className="btn btn-primary" onClick={this.customerNav}>New Customer</button>
            <button type="button" className="btn btn-primary" onClick={this.vehicleNav}>New Vehicle</button>
            <button type="button" className="btn btn-primary" onClick={this.reservationNav}>New Reservation</button>
          </div>
        </div>
          <div className="container">
          <table id="customer">
            <thead>
              <tr>
                <th>ID</th><th>First Name</th><th>Last Name</th><th>DOB</th>
                <th>Driver's License #</th><th>Driver's License Exp</th>
                <th>Country</th><th>State</th><th>Edit</th><th>Delete</th>
              </tr>
            </thead>
            <CustomerList 
              // onHideCustomer={this.hideCustomer} 
              // onClickEditCustomer={this.onClickEditCust} 
              customers={filteredCustomers} 
            />
          </table>
        </div>
      </div>
    );
  }
}

export default App;
