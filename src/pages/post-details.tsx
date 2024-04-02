const COMPONENT_NAME = "<PostDetails />";

interface Props {
	helloMessage: string;
}

function PostDetails({ helloMessage }: Props) {
	console.log(`${helloMessage} ${COMPONENT_NAME}.`);

	return <div>Hello world from Post details!</div>;
}

export default PostDetails;
