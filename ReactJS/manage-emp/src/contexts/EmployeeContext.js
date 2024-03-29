import { createContext, useState, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {


    /* const [employees, setEmployees] = useState([
        { id: uuidv4(), name: 'Thomas Hardy', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland,USA', phone: '(171) 555-2222' },
        { id: uuidv4(), name: 'Dominique Perrier', email: 'dominiqueperrier@mail.com', address: 'Obere Str. 57, Berlin, Germany', phone: '(313) 555-5735' },
        { id: uuidv4(), name: 'Maria Anders', email: 'mariaanders@mail.com', address: '25, rue Lauriston, Paris, France', phone: '(503) 555-9931' },
        { id: uuidv4(), name: 'Fran Wilson', email: 'franwilson@mail.com', address: 'C/Araquil, 67, Madrid, Spain', phone: '(204) 619-5731' },
        { id: uuidv4(), name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097' }
    ]) */

    const reducer = (employees, action) => {
        switch (action.type) {
            case 'add_employee':
                return [...employees, {
                    id: uuidv4(),
                    name: action.employee.name,
                    address: action.employee.address,
                    email: action.employee.email,
                    phone: action.employee.phone,
                }]
            case 'remove_employee':
                return employees.filter(employee => employee.id !== action.id)
            case 'update_employee':
                return employees.map((employee) => (employee.id === action.id ? action.updatedEmployee : employee))
            default:
                return employees;
        }
    }


    const [emoloyees, dispatch] = useReducer(reducer, [
        { id: uuidv4(), name: 'Thomas Hardy', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland,USA', phone: '(171) 555-2222' },
        { id: uuidv4(), name: 'Dominique Perrier', email: 'dominiqueperrier@mail.com', address: 'Obere Str. 57, Berlin, Germany', phone: '(313) 555-5735' },
        { id: uuidv4(), name: 'Maria Anders', email: 'mariaanders@mail.com', address: '25, rue Lauriston, Paris, France', phone: '(503) 555-9931' },
        { id: uuidv4(), name: 'Fran Wilson', email: 'franwilson@mail.com', address: 'C/Araquil, 67, Madrid, Spain', phone: '(204) 619-5731' },
        { id: uuidv4(), name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097' }
    ],

        () => {
            const employees = localStorage.getItem('employees')
            return employees ? JSON.parse(employees) : [];
        })

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees))

    })

    const sortedEmployees = employees.sort((a, b) => a.name.localeCompare(b.name))

    /* const addEmployee = (name, email, address, phone) => {
        setEmployees([...employees, { id: uuidv4(), name, email, address, phone }])
    } */

    /* const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id))
    } */

    /* const updateEmployee = (id, updateEmployee) => {
        setEmployees(employees.map((employee) => (employee.id === id ? updateEmployee : employee)))
    } */

    return (
        <EmployeeContext.Provider value={{ employees, dispatch, sortedEmployees }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;