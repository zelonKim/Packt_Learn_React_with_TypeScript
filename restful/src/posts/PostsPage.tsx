/* import { useEffect, useState } from "react";
import { getPosts } from "./getPosts";
import { PostData, NewPostData } from "./types";
import { PostsList } from "./PostsList";
import { savePost } from "./savePost";
import { NewPostForm } from "./NewPostForm";

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

    async function handleSave(newPostData: NewPostData) {
        const newPost = await savePost(newPostData)
        setPosts([newPost, ...posts])
    }

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
            <NewPostForm onSave={handleSave} />
            <PostsList posts={posts} />
        </div>
    )

}
 */

////////////////////

/* import { savePost } from "./savePost"
import { NewPostData } from "./types"
import {useLoaderData} from 'react-router-dom'
import { NewPostForm } from "./NewPostForm"
import { PostsList } from "./PostsList"
import { assertIsPosts } from "./getPosts"

export function PostsPage() {
    const posts = useLoaderData()
    assertIsPosts(posts)

    async function handleSave(newPostData: NewPostData) {
       await savePost(newPostData)
    }

    return (
        <div>
            <h2> Posts </h2>
            <NewPostForm onSave={handleSave} />
            <PostsList posts={posts} />
        </div>
    )
}
 */

///////////////////////

/* import { savePost } from "./savePost";
import { NewPostData, PostData } from "./types";
import { useLoaderData, Await } from "react-router-dom";
import { NewPostForm } from "./NewPostForm";
import { PostsList } from "./PostsList";
import { assertIsPosts } from "./getPosts";
import { Suspense } from "react";

type Data = {
  posts: PostData[];
};

export function assertIsData(data: unknown): asserts data is Data {
  if (typeof data !== "object") {
    throw new Error("Data is not an object");
  }
  if (data === null) {
    throw new Error("Data is null");
  }
  if (!("posts" in data)) {
    throw new Error("data does not contain posts");
  }
}

export function PostsPage() {
  const data = useLoaderData();
  assertIsData(data);

  async function handleSave(newPostData: NewPostData) {
    await savePost(newPostData);
  }

  return (
    <div>
      <h2> Posts </h2>
      <NewPostForm onSave={handleSave} />

      <Suspense fallback={<div>Fetching...</div>}>
        <Await resolve={data.posts}>
          {(posts) => {
            assertIsPosts(posts);
            return <PostsList posts={posts} />;
          }}
        </Await>
      </Suspense>
    </div>
  );
} */

////////////////////

/* import { savePost } from "./savePost";
import { NewPostData, PostData } from "./types";
import { useLoaderData, Await } from "react-router-dom";
import { NewPostForm } from "./NewPostForm";
import { PostsList } from "./PostsList";
import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { assertIsPosts, getPosts } from "./getPosts";

type Data = {
  posts: PostData[];
};

export function assertIsData(data: unknown): asserts data is Data {
  if (typeof data !== "object") {
    throw new Error("Data is not an object");
  }
  if (data === null) {
    throw new Error("Data is null");
  }
  if (!("posts" in data)) {
    throw new Error("data does not contain posts");
  }
}

export function PostsPage() {
  const {
    isLoading,
    isFetching,
    data: posts,
  } = useQuery(["postsData"], getPosts);
  // this component is re-rendered after the data has been fetched

  async function handleSave(newPostData: NewPostData) {
    await savePost(newPostData);
  }

  if (isLoading || posts === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2> Posts </h2>
      <NewPostForm onSave={handleSave} />
      {isFetching ? <div>Fetching...</div> : <PostsList posts={posts} />}
    </div>
  );
}
 */

/////////////////////

/* 
import { savePost } from "./savePost";
import { NewPostData, PostData } from "./types";
import { useLoaderData, Await } from "react-router-dom";
import { NewPostForm } from "./NewPostForm";
import { PostsList } from "./PostsList";
import { Suspense } from "react";
import { assertIsPosts, getPosts } from "./getPosts";
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'

type Data = {
  posts: PostData[];
};

export function assertIsData(data: unknown): asserts data is Data {
  if (typeof data !== "object") {
    throw new Error("Data is not an object");
  }
  if (data === null) {
    throw new Error("Data is null");
  }
  if (!("posts" in data)) {
    throw new Error("data does not contain posts");
  }
}

export function PostsPage() {

  const {
    isLoading,
    isFetching,
    data: posts,
  } = useQuery(["postsData"], getPosts);


  // when the mutation has successfully been completed, update the posts cache to contain the new post
  const queryClient = useQueryClient()

  const { mutate } = useMutation(savePost, {
    onSuccess: (savedPost) => {
      queryClient.setQueryData<PostData[]>(
        ['postsData'],
        (oldPosts) => {
          if(oldPosts === undefined) {return [savedPost]} 
            else {return [savedPost, ...oldPosts]}
        }
      )
    }
  })


  if (isLoading || posts === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2> Posts </h2>
      <NewPostForm onSave={mutate} />
      {isFetching ? <div>Fetching...</div> : <PostsList posts={posts} />}
    </div>
  );
} */

/////////////////////


import { savePost } from "./savePost";
import { NewPostData, PostData } from "./types";
import { useLoaderData, Await, useNavigate } from "react-router-dom";
import { NewPostForm } from "./NewPostForm";
import { PostsList } from "./PostsList";
import { Suspense } from "react";
import { assertIsPosts } from "./getPosts";
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'

type Data = {
  posts: PostData[];
};

export function assertIsData(data: unknown): asserts data is Data {
  if (typeof data !== "object") {
    throw new Error("Data is not an object");
  }
  if (data === null) {
    throw new Error("Data is null");
  }
  if (!("posts" in data)) {
    throw new Error("data does not contain posts");
  }
}

export function PostsPage() {
  const navigate = useNavigate()

  const queryClient = useQueryClient()

  const { mutate } = useMutation(savePost, {
    onSuccess: (savedPost) => {
      queryClient.setQueryData<PostData[]>(
        ['postsData'],
        (oldPosts) => {
          if(oldPosts === undefined) {return [savedPost]} 
            else {return [savedPost, ...oldPosts]}
        }
      )
      navigate('/')
    }
  })
  const data = useLoaderData();
  assertIsData(data);

  return (
    <div>
      <h2> Posts </h2>
      <NewPostForm onSave={mutate} />
      <Suspense fallback={<div>Fetching...</div>}>
        <Await resolve={data.posts}>
          {(posts) => {
            assertIsPosts(posts);
            return <PostsList posts={posts} />;
          }}
        </Await>
      </Suspense>
    </div>
  );
}