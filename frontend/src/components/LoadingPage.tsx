import Container from "react-bootstrap/Container"
import Spinner from "react-bootstrap/Spinner"

const LoadingPage = () => {
  return (
    <Container className="my-5">
        <Spinner animation="border" role="status" style={{ display: 'block', position: 'fixed', top: '50%', right: '50%' }}>
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </Container>
  )
}

export default LoadingPage
