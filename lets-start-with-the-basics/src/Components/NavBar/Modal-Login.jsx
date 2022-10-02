import { useState } from "react";
import { Modal, Button, Nav } from "react-bootstrap";
import FormAuthorization from "../../Forms/FormAuthorization";
import FormRegistration from "../../Forms/FormRegistration";
import { BiUser } from "react-icons/bi";

const ModalLogin = () => {
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [isRegistration, setRegistration] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <Nav>
            <Button variant="secondary" onClick={handleShow}>
                <BiUser />
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ marginRight: "40px" }}>
                        {isRegistration ? <div>Регистрация</div> : <div>Вход</div>}
                    </Modal.Title>
                    {isRegistration ?
                        <Button variant="dark" onClick={() => { setRegistration(false) }}>Войти</Button>
                        : <Button variant="dark" onClick={() => { setRegistration(true) }}>Регистрация</Button>}
                </Modal.Header>
                <Modal.Body>
                    {isRegistration ? <FormRegistration /> : <FormAuthorization />}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    {isRegistration ?
                        <Button variant="primary" onClick={"handleClose"}>Register</Button>
                        : <Button variant="primary" onClick={"handleClose"}>Войти</Button>}
                </Modal.Footer>
            </Modal>
        </Nav>
    )
}
export default ModalLogin