import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const COMPONENT_NAME = "App";
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

	return (
		<QueryClientProvider client={queryClient}>
			<h1 className="text-3xl font-bold underline">"Hello world!"</h1>
		</QueryClientProvider>
	);
}

export default App;
