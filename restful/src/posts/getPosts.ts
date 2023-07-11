/* export async function getPosts() {

    const response = await fetch(
        process.env.REACT_APP_API_URL!
    ) // not null assertion(!) is used to inform the compiler that the expression can`t be 'null' or 'undefined'
    
    const body = await response.json()
    return body
} */

////////////////////

import { savePost } from './savePost';
import { PostData } from './types';

export async function getPosts() {
    const postUrl = process.env.REACT_APP_API_URL!;

    const response = await fetch(postUrl);

    const body = (await response.json()) as unknown;
    assertIsPosts(body)
    return body;    
}



export function assertIsPosts(
    postsData: unknown
        ): asserts postsData is PostData[] {

        if (!Array.isArray(postsData)) {
            throw new Error("posts is not an array")
        }
        if (postsData.length === 0) {
            return;
        }
        postsData.forEach((post) => {
            if(!('id' in post)) {
                throw new Error("post does not contain id")
            }
            if (typeof post.id !== 'number') {
                throw new Error('id is not a number')
            }

            if(!('title' in post)) {
                throw new Error("post does not contain title")
            }
            if(typeof post.title !== 'string') {
                throw new Error('title is not a string')
            }

            if(!('description' in post)) {
                throw new Error("post does not contain description")
            }
            if (typeof post.description !== 'string') {
                throw new Error('description is not a string')
            }
        })
}
