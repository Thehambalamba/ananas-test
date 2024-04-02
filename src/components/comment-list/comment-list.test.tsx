import { generateCommentMocks } from "@/__test__/mocks/comments";
import CommentList, {
	COMPONENT_NAME,
} from "@/components/comment-list/comment-list";

import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

describe("<CommentList />", () => {
	const consoleSpy = vi.spyOn(console, "log");

	afterEach(() => {
		consoleSpy.mockReset();
	});

	it("renders comments correctly", () => {
		const commentsMock = generateCommentMocks(3);

		const props: React.ComponentProps<typeof CommentList> = {
			helloMessage: "Hello from",
			comments: commentsMock,
		};

		render(<CommentList {...props} />);

		// Check for name, body, email render and for logs
		for (let i = 0; i < commentsMock.length; i++) {
			const { body, name, id, postId } = commentsMock[i];
			const nameElement = screen.getByText(name);
			const bodyElement = screen.getByText(body);
			expect(nameElement).toBeInTheDocument();
			expect(bodyElement).toBeInTheDocument();
			expect(consoleSpy).toHaveBeenCalledWith(
				`${props.helloMessage} post ${postId}, comment ${id}.`,
			);
		}
		// Called on comment list and every comment
		expect(consoleSpy).toHaveBeenCalledTimes(commentsMock.length + 1);

		expect(consoleSpy).toHaveBeenCalledWith(
			`${props.helloMessage} ${COMPONENT_NAME}.`,
		);
	});

	it("renders zero comments message", () => {
		const props: React.ComponentProps<typeof CommentList> = {
			helloMessage: "Hello from",
			comments: [],
		};

		render(<CommentList {...props} />);

		const noCommentsMessage = screen.getByText("No comments present.");

		expect(noCommentsMessage).toBeInTheDocument();

		// Check if post and comment information is logged to console
		expect(consoleSpy).toHaveBeenCalledTimes(1);
		expect(consoleSpy).toHaveBeenCalledWith(
			`${props.helloMessage} ${COMPONENT_NAME}.`,
		);
	});
});
