import { COMPONENT_NAME } from "@/components/comment-list/comment-list";
import Post from "@/components/post/post";
import { render, screen } from "@testing-library/react";
import type React from "react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

describe("<Post />", () => {
	const consoleSpy = vi.spyOn(console, "log");

	afterEach(() => {
		consoleSpy.mockReset();
	});

	it("renders post component correctly with linkTo present", () => {
		const props: React.ComponentProps<typeof Post> = {
			helloMessage: "Hello",
			id: 1,
			title: "Test Post",
			body: "This is a test post",
			user: "John Doe",
			comments: [
				{
					id: 1,
					name: "Alice",
					email: "alice@example.com",
					body: "Test comment 1",
					postId: 1,
				},
				{
					id: 2,
					name: "Bob",
					email: "bob@example.com",
					body: "Test comment 2",
					postId: 1,
				},
			],
			linkTo: "/posts/1", // Optional linkTo prop
		};

		render(
			<MemoryRouter>
				<Post {...props} />
			</MemoryRouter>,
		);

		// Check if post content is rendered correctly
		const titleElement = screen.getByText(props.title);
		const bodyElement = screen.getByText(props.body);
		const userElement = screen.getByText(props.user);

		expect(titleElement).toBeInTheDocument();
		expect(bodyElement).toBeInTheDocument();
		expect(userElement).toBeInTheDocument();

		// Check if comment count is displayed correctly
		const commentCountElement = screen.getByText(
			`Number of comments: ${props.comments.length}`,
		);
		expect(commentCountElement).toBeInTheDocument();

		expect(consoleSpy).toHaveBeenCalledTimes(4);
		expect(consoleSpy).toHaveBeenCalledWith(
			`${props.helloMessage} post ${props.id}.`,
		);

		expect(consoleSpy).toHaveBeenCalledWith(
			`${props.helloMessage} ${COMPONENT_NAME}.`,
		);

		// Check for comment names, bodys, emails render and for logs
		for (let i = 0; i < props.comments.length; i++) {
			const { body, name, id, postId } = props.comments[i];
			const nameElement = screen.getByText(name);
			const bodyElement = screen.getByText(body);
			expect(nameElement).toBeInTheDocument();
			expect(bodyElement).toBeInTheDocument();
			expect(consoleSpy).toHaveBeenCalledWith(
				`${props.helloMessage} post ${postId}, comment ${id}.`,
			);
		}
	});
});
