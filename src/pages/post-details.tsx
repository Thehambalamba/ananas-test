import PostDetailsUI from "@/components/post-details-ui";
import withPostData from "@/hooks/hoc/with-post-data";
import { useParams } from "react-router-dom";

const COMPONENT_NAME = "<PostDetails />";

type Props = {
	helloMessage: string;
};

function PostDetails({ helloMessage }: Props) {
	console.log(`${helloMessage} ${COMPONENT_NAME}.`);

	const { postId } = useParams<{ postId: string }>();

	if (postId === undefined) {
		return <div>Post ID is missing.</div>;
	}

	const EnhancedPostDetailsUI = withPostData(PostDetailsUI);

	return <EnhancedPostDetailsUI helloMessage={helloMessage} postId={postId} />;
}

export default PostDetails;
