import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext } from "react";

const AddForm = () => {
    const {addEmployee} = useContext(EmployeeContext)
    const [newEmployee, setNewEmployee] = useState({name:'', email:'', address:'', phone:''});

    const onInputChange = (e)=>{
        setNewEmployee({...newEmployee, [e.target.name]:e.target.value})
    }

    const {name, email, address, phone} = newEmployee


    const handleSubmit = (e)=>{
        e.preventDefault();
        addEmployee(name, email, address, phone)
    }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control type="text" placeholder="Name *" required name="name" value={name} onChange={(e)=>onInputChange(e)}/>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Control type="email" placeholder="Email *" required name="email" value={email} onChange={(e)=>onInputChange(e)}/>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Control as="textarea" placeholder="Address *" rows={3} name="address" value={address} onChange={(e)=>onInputChange(e)}/>
        </Form.Group>
        <Form.Group>
        <br />
          <Form.Control type="text" placeholder="Phone" name="phone" value={phone} onChange={(e)=>onInputChange(e)}/>
        </Form.Group>
        <br />
        <Button variant="success" type='submit' block="true">Add New Employee</Button>
      </Form>
    </>
  );
};

export default AddForm;
