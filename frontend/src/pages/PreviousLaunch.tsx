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
        <pre>
            {JSON.stringify(data)}
        </pre>
    )
}  

export default pageWithNavbar(PreviousLaunch);
