const COMPONENT_NAME = "<Home />";

interface Props {
	helloMessage: string;
}

function Home({ helloMessage }: Props) {
	console.log(`${helloMessage} ${COMPONENT_NAME}.`);

	return <div>Hello world from Home!</div>;
}

export default Home;
