/* 
import { assertIsGetViewerResponse } from './getViewer';
import { RepoData, SearchCriteria } from './types';

export const GET_REPO = `
    query GetRepo($org: String!, $repo: String!) {
        repository(owner: $org, name: $repo) {
            id
            name
            description
            viewerHasStarred
            stargazers {
                totlaCount
            }
        }
    }`



export async function getRepo(searchCriteria: SearchCriteria) {
    const response = await fetch(process.env.REACT_APP_GITHUB_URL!, {
      method: "POST",
      body: JSON.stringify({
        query: GET_REPO,
        variables: {
            org: searchCriteria.org,
            repo: searchCriteria.repo
        }
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_PAT}`,
      },
    });
    const body = (await response.json()) as unknown;
    assertIsGetViewerResponse(body);

    return body.data
}
 */

//////////////////////

import { gql } from '@apollo/client'

export const GET_REPO = gql`
    query GetRepo($org: String!, $repo: String!) {
        repository(owner: $org, name: $repo) {
            id
            name
            description
            viewerHasStarred
            stargazers {
                totlaCount
            }
        }
    }`;



