const COMPONENT_NAME = "App";

interface Props {
	helloMessage: string;
}

function App({ helloMessage }: Props) {
	console.log(`${helloMessage} ${COMPONENT_NAME}.`);

	return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
