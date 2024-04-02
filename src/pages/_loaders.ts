import { fetchAllComments, fetchAllPosts, fetchAllUsers } from "../api/queries";

export async function postsLoader() {
	return await Promise.all([
		fetchAllPosts(),
		fetchAllComments(),
		fetchAllUsers(),
	]);
}
