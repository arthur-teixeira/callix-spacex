import { Alert, Container } from "react-bootstrap";

type ErrorAlertProps = {
    message: string;
};

const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return (
    <Container className="my-5">
        <Alert variant="danger">
            Um erro inesperado ocorreu: {message}
        </Alert>
    </Container>
  )
}

export default ErrorAlert
