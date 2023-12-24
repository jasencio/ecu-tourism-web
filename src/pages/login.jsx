import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Main from "../layaout/main";
import CustomContainer from "../layaout/customContainer";

function Login() {
    return (
        <Main>
            <CustomContainer className="d-flex align-items-center justify-content-center">
            <h3 class="h4 mb-4 font-weight-normal">Por favor Inicia Sesión</h3>
            <Form  >
                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu correo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingresa tu contraseña" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className="text-muted font-weight-light" type="checkbox" label="Mantener mi sesión iniciada" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Iniciar Sesión
                </Button>
            </Form>
            </CustomContainer>
        </Main>
    );
}

export default Login;