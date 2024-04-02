import Search, { COMPONENT_NAME } from "@/components/search/search";
import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

describe("<Search />", () => {
	const consoleSpy = vi.spyOn(console, "log");

	afterEach(() => {
		consoleSpy.mockReset();
	});

	it("renders search component correctly", () => {
		const mockChildren = vi.fn((searchQuery, handleSearch) => (
			<div>
				<input
					type="text"
					value={searchQuery}
					onChange={(e) => handleSearch(e.target.value)}
				/>
				<p>Search Query: {searchQuery}</p>
			</div>
		));

		const props: React.ComponentProps<typeof Search> = {
			helloMessage: "Hello",
			children: mockChildren,
		};

		render(<Search {...props} />);

		const inputElement = screen.getByRole("textbox");
		expect(inputElement).toBeInTheDocument();

		fireEvent.change(inputElement, { target: { value: "Test query" } });
		expect(mockChildren).toHaveBeenCalledTimes(2);
		expect(mockChildren).toHaveBeenCalledWith(
			"Test query",
			expect.any(Function),
		);

		expect(consoleSpy).toHaveBeenCalledTimes(2);
		expect(consoleSpy).toHaveBeenCalledWith(
			`${props.helloMessage} ${COMPONENT_NAME}.`,
		);
	});
});
