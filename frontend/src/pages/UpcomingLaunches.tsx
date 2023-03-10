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
        <pre>
            {JSON.stringify(data)}
        </pre>
    )
}

export default pageWithNavbar(UpcomingLaunches);
