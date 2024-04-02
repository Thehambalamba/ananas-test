import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const COMPONENT_NAME = "<Layout />";

interface Props {
	helloMessage: string;
}

function Layout({ helloMessage }: Props) {
	console.log(`${helloMessage} ${COMPONENT_NAME}.`);

	const styleLink = React.useMemo(() => {
		return ({ isActive }: { isActive: boolean }) =>
			isActive
				? "p-2 active"
				: "p-2 underline text-blue-600 hover:text-blue-800";
	}, []);

	return (
		<>
			<header>
				<nav className="flex gap-2">
					<NavLink to="/" className={styleLink}>
						Home
					</NavLink>
					<NavLink to="posts" className={styleLink}>
						Posts
					</NavLink>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
			<footer />
		</>
	);
}

export default Layout;
