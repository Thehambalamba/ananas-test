import Comment from "@/components/comment/comment";
import { render, screen } from "@testing-library/react";
import type React from "react";
import { vi } from "vitest";

describe("<Comment />", () => {
	const consoleSpy = vi.spyOn(console, "log");

	afterEach(() => {
		consoleSpy.mockReset();
	});

	it("renders comment correctly", () => {
		const props: React.ComponentProps<typeof Comment> = {
			helloMessage: "Hello",
			id: 1,
			name: "John Doe",
			email: "johndoe@example.com",
			body: "This is a test comment",
			postId: 1,
		};

		render(<Comment {...props} />);

		// Check if name, email, and body are rendered correctly
		const nameElement = screen.getByText(props.name);
		const emailElement = screen.getByText(props.email);
		const bodyElement = screen.getByText(props.body);

		expect(nameElement).toBeInTheDocument();
		expect(emailElement).toBeInTheDocument();
		expect(bodyElement).toBeInTheDocument();

		// Check if post and comment information is logged to console
		expect(consoleSpy).toHaveBeenCalledTimes(1);
		expect(consoleSpy).toHaveBeenCalledWith(
			`${props.helloMessage} post ${props.postId}, comment ${props.id}.`,
		);
	});
});
