import useFetchNextLaunch from "../hooks/useFetchNextLaunch";

const NextLaunch = () => {
  const { 
      isLoading,
      isError,
      error,
      data
  } = useFetchNextLaunch();

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>An error {(error as any)?.message} has occurred</div>

  console.log(data);

  return (
    <pre>
        {JSON.stringify(data)}
    </pre>
  )
}

export default NextLaunch;
