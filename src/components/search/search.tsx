import React from "react";

export const COMPONENT_NAME = "<Search />";

type SearchProps = {
	helloMessage: string;
	children: (
		searchQuery: string,
		handleSearch: (query: string) => void,
	) => React.ReactNode;
};

function Search({ helloMessage, children }: SearchProps) {
	console.log(`${helloMessage} ${COMPONENT_NAME}.`);

	const [searchQuery, setSearchQuery] = React.useState("");

	const handleSearch = React.useCallback((value: string) => {
		setSearchQuery(value);
	}, []);

	return <>{children(searchQuery, handleSearch)}</>;
}

export default Search;
