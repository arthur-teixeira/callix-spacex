import { Container } from "react-bootstrap";
import ErrorAlert from "../components/ErrorAlert";
import LaunchCardList from "../components/LaunchCardList";
import useFetchPastLaunches from "../hooks/useFetchPastLaunches";
import pageWithNavbar from "../services/pageWithNavbar";

const PastLaunches = () => {
    const {
        isLoading,
        isError,
        error,
        data
    } = useFetchPastLaunches();

    if (isLoading) return <div>Loading...</div>

    if (isError) return <ErrorAlert message={(error as any)?.message} />

    return (
        <Container className="my-5">
            <h1 className="my-5">Últimos lançamentos</h1>
           <LaunchCardList launches={data!} /> 
        </Container>
    )
}

export default pageWithNavbar(PastLaunches);
