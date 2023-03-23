import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext } from "react";

const EditForm = ({theEmployee}) => {
    const {updateEmployee} = useContext(EmployeeContext)
    const id = theEmployee.id

  const [name, setName] = useState(theEmployee.name);
  const [email, setEmail] = useState(theEmployee.email);
  const [address, setAdress] = useState(theEmployee.address);
  const [phone, setPhone]  = useState(theEmployee.phone)
  

  const updatedEmployee = {id, name, email, address, phone}


  const editEmployee = (e)=>{
    e.preventDefault()
    updateEmployee(id, updatedEmployee)
  }


  return (
    <>
      <Form >
        <Form.Group>
          <Form.Control type="text" placeholder="Name *" required name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Control type="email" placeholder="Email *" required name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Control as="textarea" placeholder="Address *" rows={3} name="address" value={address} onChange={(e)=>setAdress(e.target.value)}/>
        </Form.Group>
        <Form.Group>
        <br />
          <Form.Control type="text" placeholder="Phone" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </Form.Group>
        <br />
        <Button variant="success" type='submit' block="true" onClick={editEmployee}>Edit Employee</Button>
      </Form>
    </>
  );
};

export default EditForm;
