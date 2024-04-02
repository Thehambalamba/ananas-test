const COMPONENT_NAME = "<Posts />";

interface Props {
	helloMessage: string;
}

function Posts({ helloMessage }: Props) {
	console.log(`${helloMessage} ${COMPONENT_NAME}.`);

	return <div>Hello world from Posts!</div>;
}

export default Posts;
