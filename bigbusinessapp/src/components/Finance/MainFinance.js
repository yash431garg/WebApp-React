import React from 'react';
import PaymentDues from './Dues/PaymentDues';
import PaymentReminders from './Reminders/PaymentReminders';
import { TransactionsTable } from './TransactionTable/TransactionsTable';
// import Routes from './components/Routes';
// import Header from './components/Header/Header';

// react-bootstrap here
import { Container, Row, Col } from 'react-bootstrap';

const MainFinance = () => {
    return (
        <div>
            <div className='container' style={{ paddingLeft: '0%', margin: '0' }}>
                <Container style={{ minWidth: '1450px', marginLeft: '50px', marginRight: '0px', paddingRight: '0px' }}>
                    <Row>
                        <Col className='align-self-center'>
                            <h3>Transactions : </h3>
                        </Col>
                        <Col className='align-right align-self-center' style={{ marginLeft: 'auto', marginRight: '0px' }}>
                            <TransactionsTable />
                        </Col>
                    </Row>
                    <hr style={{ height: '0.1rem', backgroundColor: 'forestgreen' }} />
                    <Row>
                        <Col className='align-self-center'>
                            <h3>Reminders : </h3>
                        </Col>
                        <Col className='align-self-center'>
                            <PaymentReminders />
                        </Col>
                    </Row>
                    <hr style={{ height: '0.1rem', backgroundColor: 'forestgreen' }} />
                    <Row>
                        <Col className='align-self-center'>
                            <h3>Dues : </h3>
                        </Col>
                        <Col className='align-self-center'>
                            <PaymentDues /></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default MainFinance
