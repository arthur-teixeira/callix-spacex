import { Container } from "react-bootstrap";
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

    if (isError) return <div>An error {(error as any)?.message} has occurred</div>

    return (
        <Container className="my-5">
           <LaunchCardList launches={data!} /> 
        </Container>
    )
}

export default pageWithNavbar(PastLaunches);
