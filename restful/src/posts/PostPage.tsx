import { useEffect, useState } from "react";
import { getPosts } from "./getPosts";
import { PostData } from "./types";
import { PostsList } from "./PostsList";

export function PostsPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState<PostData[]>([])

    useEffect(() => {
        let cancel = false;

        getPosts().then((data) => {
            if(!cancel) {
                setPosts(data);
                setIsLoading(false);
            }
        })

        return () => {
            cancel = true;
        }
    }, [])

    if (isLoading) {
        return(
            <div>
                Loading...
            </div>
        )
    }
    
    return (
        <div>
            <h2> Posts </h2>
            <PostsList posts={posts} />
        </div>
    )
}

