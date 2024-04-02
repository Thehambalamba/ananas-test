import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const COMPONENT_NAME = "<Layout />";

type Props = {
	helloMessage: string;
};

function Layout({ helloMessage }: Props) {
	console.log(`${helloMessage} ${COMPONENT_NAME}.`);

	const styleLink = React.useMemo(() => {
		return ({ isActive }: { isActive: boolean }) =>
			isActive ? "p-2" : "p-2 underline text-blue-600 hover:text-blue-800";
	}, []);

	return (
		<>
			<header className="border-b-2">
				<nav className="flex gap-2">
					<NavLink to="/" className={styleLink}>
						Home
					</NavLink>
					<NavLink to="posts" className={styleLink}>
						Posts
					</NavLink>
				</nav>
			</header>
			<main className="px-4 mt-6">
				<Outlet />
			</main>
			<footer />
		</>
	);
}

export default Layout;
