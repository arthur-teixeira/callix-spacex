import { Launch } from "../types/Launch"
import LaunchCard from "./LaunchCard";

type LaunchCardGridProps = {
    launches: Launch[];
}

const LaunchCardGrid = ({ launches }: LaunchCardGridProps) => {
  return (
    <> 
        {launches.map((launch) => (
            <LaunchCard launch={launch} />
        ))}
    </>
  )
}

export default LaunchCardGrid
