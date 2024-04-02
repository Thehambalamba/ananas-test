import { QueryClient } from "@tanstack/react-query";
import type { Comment, Post, PostsWithCommentsAndUser, User } from "./types";

// Create a client
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

const callJson = (response: Response) => response.json();

export async function fetchPostsWithCommentsAndUser() {
	try {
		// Fetch posts, comments, and users
		const posts = fetch("https://jsonplaceholder.typicode.com/posts").then(
			callJson,
		) as Promise<Post[]>;
		const comments = fetch(
			"https://jsonplaceholder.typicode.com/comments",
		).then(callJson) as Promise<Comment[]>;
		const users = fetch("https://jsonplaceholder.typicode.com/users").then(
			callJson,
		) as Promise<User[]>;

		// Wait for all fetch operations to complete
		return await Promise.all([posts, comments, users]).then(
			([posts, comments, users]) => {
				// Join posts and comments and related user
				const postsWithCommentsAndUser = posts.reduce(
					(acc: PostsWithCommentsAndUser[], post) => {
						const postComments = comments.filter(
							(comment) => comment.postId === post.id,
						);
						const postUser = users.find((user) => user.id === post.userId);
						acc.push({
							...post,
							comments: postComments,
							user: postUser ? postUser.name : "Unknown User",
						});
						return acc;
					},
					[],
				);

				return Promise.resolve(postsWithCommentsAndUser);
			},
		);
	} catch (error) {
		return Promise.reject(error);
	}
}

export async function fetchPostWithCommentsAndUser(postId: string) {
	try {
		// Fetch post, comments, and users
		const post = fetch(
			`https://jsonplaceholder.typicode.com/posts/${postId}`,
		).then(callJson) as Promise<Post>;
		const comments = fetch(
			`https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
		).then(callJson) as Promise<Comment[]>;
		const users = fetch("https://jsonplaceholder.typicode.com/users").then(
			callJson,
		) as Promise<User[]>;

		// Wait for all fetch operations to complete
		return await Promise.all([post, comments, users]).then(
			([post, comments, users]) => {
				const postUser = users.find((user) => user.id === post.userId);

				const postWithCommentsAndUser: PostsWithCommentsAndUser = {
					...post,
					comments,
					user: postUser ? postUser.name : "Unknown User",
				};

				return Promise.resolve(postWithCommentsAndUser);
			},
		);
	} catch (error) {
		return Promise.reject(error);
	}
}
