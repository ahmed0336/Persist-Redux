import React from 'react'

import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';

import { decNumber, incNumber } from '../redux/action/actionFunction';

const Home = () => {
       
    const myState = useSelector((state) => state.counter.counter)
    const myformvalue = useSelector((state) => state.counter.myform.state)
//   console.log("value of redux state-->", useSelector((state) => state.counter.counter))
  console.log("value of form value",myformvalue)

  const dispatch = useDispatch();

    return (
        <>
            <h1>Home</h1>
            <div className="mb-2 mt-5 ">
                <h1>
                    {myState}
                      
                </h1>
                <Button variant="primary" className='mx-2  px-5' size="lg" onClick={() => { dispatch(incNumber(myState+1)) }} >
                    +
                </Button>{' '}
                <Button variant="primary" className='mx-2 px-5' size="lg" onClick={() => dispatch(decNumber(myState-1))} >
                    -
                </Button>

                 <h1>value of form name is {myformvalue.name}</h1>
                 <h1>value of form name is {myformvalue.email}</h1>
            </div>
        </>
    )
}

export default Home