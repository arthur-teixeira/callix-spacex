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
        <pre>
            {JSON.stringify(data)}
        </pre>
    )
}

export default pageWithNavbar(NextLaunch);
