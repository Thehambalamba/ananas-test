import Layout, { COMPONENT_NAME } from "@/components/layout/layout";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type React from "react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

describe("<Layout />", () => {
	const consoleSpy = vi.spyOn(console, "log");
	const notActiveClasses = "underline text-blue-600 hover:text-blue-800";

	afterEach(() => {
		consoleSpy.mockReset();
	});

	it("renders layout correctly", () => {
		const props: React.ComponentProps<typeof Layout> = {
			helloMessage: "Hello",
		};

		render(
			<MemoryRouter>
				<Layout {...props} />
			</MemoryRouter>,
		);

		const homeLink = screen.getByText("Home");
		const postsLink = screen.getByText("Posts");

		expect(homeLink).toBeInTheDocument();
		expect(postsLink).toBeInTheDocument();

		// Check if console.log message is logged correctly
		expect(consoleSpy).toHaveBeenCalledTimes(1);
		expect(consoleSpy).toHaveBeenCalledWith(
			`${props.helloMessage} ${COMPONENT_NAME}.`,
		);
	});

	it("adds classes to active link", async () => {
		const props: React.ComponentProps<typeof Layout> = {
			helloMessage: "Hello",
		};

		render(
			<MemoryRouter initialEntries={["/posts"]} initialIndex={0}>
				<Layout {...props} />
			</MemoryRouter>,
		);

		expect(screen.getByText("Home")).toHaveClass(notActiveClasses);
		expect(screen.getByText("Posts")).not.toHaveClass(notActiveClasses);

		await userEvent.click(screen.getByText("Home")); // Simulate clicking the "Home" link

		expect(screen.getByText("Home")).not.toHaveClass(notActiveClasses);
		expect(screen.getByText("Posts")).toHaveClass(notActiveClasses);
	});
});
