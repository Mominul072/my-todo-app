// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import { Card, CardBody, CardTitle, ListGroup } from 'react-bootstrap'
import Form from '../Form';

const TodoList = () => {
    let [state,setState]=useState([{title:"Hello",content:"world"}])


  return (
    <>
     <Form state={state} setState={setState}/>
     <Card className='mt-5'>
        <CardBody>
            <CardTitle className='text-center todo-title'>
                My Todos

            </CardTitle>
            <ListGroup>
               
             <ListGroup.Item>
                  {state.map((item)=>{
                    return <>
                    <h1> Title:{item.title}</h1>
                    <h1> Content:{item.content}</h1>
                    </>
                  })}
                </ListGroup.Item>
                     
                         
            
              
                
        </ListGroup>
        </CardBody>
    </Card>
   
    </>
   
  )
}

export default TodoList