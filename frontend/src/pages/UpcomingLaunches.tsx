import { Container } from "react-bootstrap";
import LaunchCardList from "../components/LaunchCardList";
import useFetchUpcomingLaunches from "../hooks/useFetchUpcomingLaunches";
import pageWithNavbar from "../services/pageWithNavbar";

const UpcomingLaunches = () => {
    const {
        isLoading,
        isError,
        error,
        data
    } = useFetchUpcomingLaunches();

    if (isLoading) return <div>Loading...</div>

    if (isError) return <div>An error {(error as any)?.message} has occurred</div>

    return (
        <Container>
            <LaunchCardList launches={data!} />
        </Container>
    )
}

export default pageWithNavbar(UpcomingLaunches);
