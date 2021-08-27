import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState, useEffect } from "react";
import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from "./EditForm";


const Employee = ({ employee }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleClose();
    }, [employee])

    const { deleteEmployee } = useContext(EmployeeContext);

    return (
        <>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button className="btn text-warning btn-act" onClick={handleShow} data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button className="btn text-danger btn-act" onClick={() => deleteEmployee(employee.id)} data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>


            </td>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title>
                        Update Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm theEmployee={employee} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close Modal</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Employee;