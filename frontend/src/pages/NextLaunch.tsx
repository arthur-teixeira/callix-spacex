import { Container } from "react-bootstrap";
import LaunchCard from "../components/LaunchCard";
import useFetchNextLaunch from "../hooks/useFetchNextLaunch";
import pageWithNavbar from "../services/pageWithNavbar";

const NextLaunch = () => {
    const {
        isLoading,
        isError,
        error,
        data
    } = useFetchNextLaunch();

    if (isLoading) return <div>Loading...</div>

    if (isError) return <div>An error {(error as any)?.message} has occurred</div>

    return (
        <Container className="my-5">
            <h1 className="my-5">Próximo lançamento</h1>
            <LaunchCard launch={data!} />
        </Container>
    )
}

export default pageWithNavbar(NextLaunch);
