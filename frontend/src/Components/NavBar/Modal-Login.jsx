import { useState } from "react";
import { Modal, Button, Nav } from "react-bootstrap";
import { BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import FormRegistrationAndAuthorization from "../../Forms/FormRegistrationAndAuthorization";
import { actions, loginThunk, RegistrationThank } from "../../redux/Auth-Reducer";

const ModalLogin = () => {
    const showRegistration = useSelector((state) => state.AuthPage.showRegistration)
    const dispatch = useDispatch()
    const ShowRegistration = () => {
        dispatch(actions.setShowRegistration(true))
    }
    const HideRegistration = () => {
        dispatch(actions.setShowRegistration(false))
    }
    const [isRegistration, setRegistration] = useState(false);
    const submitHandler = (values) => {
        let authorizationData = values
        delete authorizationData.confirmPassword
        isRegistration ?
            dispatch(RegistrationThank(authorizationData)) :
            dispatch(loginThunk(authorizationData))
    }
    return (
        <Nav>
            <Button variant="secondary" onClick={ShowRegistration}>
                <BiUser />
            </Button>
            <Modal show={showRegistration} onHide={HideRegistration}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ marginRight: "40px" }}>
                        {isRegistration ? <div>Регистрация</div> : <div>Вход</div>}
                    </Modal.Title>
                    {isRegistration ?
                        <Button variant="dark" onClick={() => { setRegistration(false) }}>Войти</Button>
                        : <Button variant="dark" onClick={() => { setRegistration(true) }}>Регистрация</Button>}
                </Modal.Header>
                <Modal.Body>
                    <FormRegistrationAndAuthorization submitHandler={submitHandler} handleClose={HideRegistration} isRegistration={isRegistration} />
                </Modal.Body>

            </Modal>
        </Nav>
    )
}
export default ModalLogin