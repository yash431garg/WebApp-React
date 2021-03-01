import React from 'react';
import { useState } from 'react';

const PaymentDues = () => {
    const [redata,] = useState([{
        id: 0,
        name: 'Bb',
        amount: '2300',
        date: '09/01/2021'
    }, {
        id: 1,
        name: 'Cc',
        amount: '6559',
        date: '15/01/2021'
    },]);
    return (
        <div>
            {/* <h3>Dues :</h3> */}
            <p>{redata.id}</p>
            {redata.map((task, index) => (
                <div key={index} style={{flexDirection:'row', display:'inline-block',border:'1px groove orange',marginLeft:'5px'}}>
                    <h5>Name :{task.name}</h5>
                    <p>Amount :{task.amount} </p>
                    <p>Date :{task.date}</p>
                </div>
            ))}
        </div>
    )
}

export default PaymentDues