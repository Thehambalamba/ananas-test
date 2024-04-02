import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import PostDetails from "./pages/post-details";
import Posts from "./pages/posts";

const COMPONENT_NAME = "<Root />";
// Create a client
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

interface Props {
	helloMessage: string;
}

function App({ helloMessage }: Props) {
	console.log(`${helloMessage} ${COMPONENT_NAME}.`);

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route element={<Layout helloMessage={helloMessage} />}>
				<Route element={<Home helloMessage={helloMessage} />} index path="/" />
				<Route element={<Posts helloMessage={helloMessage} />} path="posts" />
				<Route
					element={<PostDetails helloMessage={helloMessage} />}
					path="post/:postId"
				/>
			</Route>,
		),
	);

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
