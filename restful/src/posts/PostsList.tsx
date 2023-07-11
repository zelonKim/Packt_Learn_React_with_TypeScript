import { PostData } from "./types"

type Props = {
    posts: PostData[]
}

export function PostsList({ posts }: Props) {
    return(
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <h3>
                        {post.title}
                    </h3>
                    <p>{post.description}</p>
                </li>
            ))}
        </ul>
    )
}