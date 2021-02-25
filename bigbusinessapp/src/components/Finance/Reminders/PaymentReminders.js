import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Reminder from './Reminder';
import { SiAddthis } from 'react-icons/si';
import NewReminder from './NewReminder';

const PaymentReminders = (props) => {
    const [showNewReminder, setshowNewReminder] = useState(false);
    const [redata, setReminder] = useState([{
        id: 0,
        name: 'Bb',
        amount: '2300',
        date: '02/05/2021'
    },]);

    const AddNewReminder = (redat) => {

        const id = Math.floor(Math.random() * 10) + 1;
        const newtask = { id, ...redat };
        console.log(newtask);
        setReminder([...redata, newtask]);
        console.log(redata);
    }

    const DeleteReminder = (id) => {
        setReminder(redata.filter((task) => task.id !== id))
    }

    return (
        <div>
            <h2>{props.title} <SiAddthis style={{ color: !showNewReminder ? 'green' : 'red' }} onClick={() => setshowNewReminder(!showNewReminder)} title='Click to Add New Reminder.' /></h2>
            {showNewReminder && <NewReminder onSaveReminder={AddNewReminder} />}
            <Reminder redata={redata} onDelete={DeleteReminder} />
        </div>
    )
}

PaymentReminders.defaultProps = {
    title: 'Add Reminder',
}

PaymentReminders.propTypes = {
    title: PropTypes.string.isRequired
}

export default PaymentReminders