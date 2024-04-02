const COMPONENT_NAME = "<Home />";

interface Props {
	helloMessage: string;
}

function Home({ helloMessage }: Props) {
	console.log(`${helloMessage} ${COMPONENT_NAME}.`);

	return <p className="text-2xl">Home</p>;
}

export default Home;
