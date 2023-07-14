import { useQuery } from "@tanstack/react-query";
import { getViewer } from "./api/getViewer";

export function Header() {
    const { isLoading, data } = useQuery(['viewer'], getViewer)  // The data returned from 'getViewer' will be 'data' variable
    
    if (isLoading || data === undefined) {
        return <div>...</div>
    }

    return (
        <header>
            <img src={data.viewer.avatarUrl} alt="Viewer" />
            <div>{data.viewer.name}</div>
            <h1> GitHub Search </h1>
        </header>
    )
}