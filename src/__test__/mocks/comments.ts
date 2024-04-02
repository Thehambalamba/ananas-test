import type { Comment } from "@/api/types";

export function generateCommentMock(id: number): Comment {
	return {
		postId: 1,
		id: id,
		name: `User ${id}`,
		email: `user${id}@example.com`,
		body: `This is a test comment from User ${id}`,
	};
}

export function generateCommentMocks(count: number): Comment[] {
	const comments: Comment[] = [];
	for (let i = 1; i <= count; i++) {
		comments.push(generateCommentMock(i));
	}
	return comments;
}
