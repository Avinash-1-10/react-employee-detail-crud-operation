import React,{ createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

export const EmployeeContext = createContext()



const EmployeeContextProvider =(props)=>{
    console.log()
    const [employees, setEmployees] = useState([
        {
          id: uuidv4(),
          name: "John Doe",
          email: "johndoe@example.com",
          address: "123 Main St, Anytown USA",
          phone: "555-1234",
        },
        {
          id: uuidv4(),
          name: "Jane Smith",
          email: "janesmith@example.com",
          address: "456 Oak Ave, Another City",
          phone: "555-5678",
        },
        {
          id: uuidv4(),
          name: "Bob Johnson",
          email: "bjohnson@example.com",
          address: "789 Elm St, Smalltown",
          phone: "555-9012",
        },
        {
          id: uuidv4(),
          name: "Samantha Lee",
          email: "slee@example.com",
          address: "321 Pine St, Ruralville",
          phone: "555-3456",
        },
        {
          id: uuidv4(),
          name: "Tom Wilson",
          email: "twilson@example.com",
          address: "654 Birch Ave, Suburbia",
          phone: "555-7890",
        },
      ]);



      const addEmployee = (name, email, address, phone)=>{
        setEmployees([...employees, {id:uuidv4(), name, email, address, phone}])
      }

      const deleteEmployee = (id)=>{
        setEmployees(employees.filter(employee=> employee.id !== id))
      }

      const updateEmployee = (id, updatedEmployee )=>{
        setEmployees(employees.map((employee)=>employee.id=== id ? updatedEmployee: employee))
      }




    return(
        <>
         <EmployeeContext.Provider value={{employees, addEmployee, deleteEmployee, updateEmployee}}>
                {props.children}
         </EmployeeContext.Provider>

        </>
    )
}

export default EmployeeContextProvider