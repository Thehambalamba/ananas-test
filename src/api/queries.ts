import { QueryClient } from "@tanstack/react-query";
import { QueryKeys } from "../constants";

// Create a client
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

export function fetchAllPosts() {
	return queryClient.fetchQuery({
		queryKey: [QueryKeys.POSTS],
		queryFn: async () => {
			try {
				const posts = await fetch(
					"https://jsonplaceholder.typicode.com/posts",
				).then((response) => response.json());

				return Promise.resolve(posts);
			} catch (error) {
				return Promise.reject(error);
			}
		},
	});
}

export function fetchPost(postId: number) {
	return queryClient.fetchQuery({
		queryKey: [`${QueryKeys.POSTS}/${postId}`],
		queryFn: async () => {
			const posts = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${postId}`,
			).then((response) => response.json());

			return posts;
		},
	});
}

export function fetchAllComments() {
	return queryClient.fetchQuery({
		queryKey: [QueryKeys.COMMENTS],
		queryFn: async () => {
			const posts = await fetch(
				"https://jsonplaceholder.typicode.com/comments",
			).then((response) => response.json());

			return posts;
		},
	});
}
export function fetchPostComments(postId: number) {
	return queryClient.fetchQuery({
		queryKey: [`${QueryKeys.COMMENTS}/${postId}`],
		queryFn: async () => {
			const posts = await fetch(
				`https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
			).then((response) => response.json());

			return posts;
		},
	});
}

export function fetchAllUsers() {
	return queryClient.fetchQuery({
		queryKey: [QueryKeys.USERS],
		queryFn: async () => {
			const posts = fetch("https://jsonplaceholder.typicode.com/users").then(
				(response) => response.json(),
			);

			return posts;
		},
	});
}
