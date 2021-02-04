import React, { Component } from 'react';
// import MainFinance from './components/Finance/MainFinance';
// import PaymentDues from './components/Finance/Dues/PaymentDues';
// import PaymentReminders from './components/Finance/Reminders/PaymentReminders';
// import { TransactionsTable } from './components/Finance/Tables/TransactionsTable';
import Routes from './components/Routes';
import Header from './components/Header/Header';

// react-bootstrap here
// import { Container, Row, Col } from 'react-bootstrap';


//Entry point for the App
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main style={{ padding: 0, margin: 0 }} id='app'>
          <div className='Header_div' style={{ margin: '0', padding: '0' }}>
            <Header />
            <Routes />
            {/* <MainFinance /> */}
          </div>
        </main>
      </React.Fragment >
    );
  };
}
export default App;