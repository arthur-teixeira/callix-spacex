import { Container } from "react-bootstrap";
import LaunchCard from "../components/LaunchCard";
import useFetchPreviousLaunch from "../hooks/useFetchPreviousLaunch";
import pageWithNavbar from "../services/pageWithNavbar";

const PreviousLaunch = () => {
    const {
        isLoading,
        isError,
        error,
        data
    } = useFetchPreviousLaunch();

    if (isLoading) return <div>Loading...</div>

    if (isError) return <div>An error {(error as any)?.message} has occurred</div>

    return (
        <Container className="my-5">
            <LaunchCard launch={data!} />
        </Container>
    )
}  

export default pageWithNavbar(PreviousLaunch); 
