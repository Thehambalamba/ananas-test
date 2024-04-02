import { useQuery } from "@tanstack/react-query";

export function usePosts() {
	return useQuery({
		queryKey: ["posts"],
		queryFn: async () => {
			const posts = await fetch(
				"https://jsonplaceholder.typicode.com/posts",
			).then((response) => response.json());

			return posts;
		},
	});
}

export function useComments() {
	return useQuery({
		queryKey: ["comments"],
		queryFn: async () => {
			const posts = await fetch(
				"https://jsonplaceholder.typicode.com/comments",
			).then((response) => response.json());

			return posts;
		},
	});
}

export function useUsers() {
	return useQuery({
		queryKey: ["user"],
		queryFn: async () => {
			const posts = fetch("https://jsonplaceholder.typicode.com/users").then(
				(response) => response.json(),
			);

			return posts;
		},
	});
}
