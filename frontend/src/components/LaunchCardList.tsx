import { Launch } from "../types/Launch"
import LaunchCard from "./LaunchCard";

type LaunchCardGridProps = {
    launches: Launch[];
}

const LaunchCardList = ({ launches }: LaunchCardGridProps) => {
  return (
    <> 
        {launches.map((launch) => (
            <LaunchCard launch={launch} />
        ))}
    </>
  )
}

export default LaunchCardList
