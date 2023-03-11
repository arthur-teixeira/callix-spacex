import { Container } from "react-bootstrap";
import ErrorAlert from "../components/ErrorAlert";
import LaunchCardList from "../components/LaunchCardList";
import LoadingPage from "../components/LoadingPage";
import useFetchUpcomingLaunches from "../hooks/useFetchUpcomingLaunches";
import pageWithNavbar from "../services/pageWithNavbar";

const UpcomingLaunches = () => {
    const {
        isLoading,
        isError,
        error,
        data
    } = useFetchUpcomingLaunches();

    if (isLoading) return <LoadingPage />

    if (isError) return <ErrorAlert message={(error as any)?.message} />

    return (
        <Container className="my-3">
            <h1 className="my-5">Próximos lançamentos</h1>
            <LaunchCardList launches={data!} />
        </Container>
    )
}

export default pageWithNavbar(UpcomingLaunches);
