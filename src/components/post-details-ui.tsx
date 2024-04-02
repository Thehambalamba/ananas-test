import type { PostsWithCommentsAndUser } from "@/api/types";
import Post from "@/components/post";

const COMPONENT_NAME = "<PostDetailsUI />";

type Props = {
	helloMessage: string;
	postData: PostsWithCommentsAndUser;
};

function PostDetailsUI({
	postData: { title, id, body, user, comments },
	helloMessage,
}: Props) {
	console.log(`${helloMessage} ${COMPONENT_NAME}.`);

	return (
		<Post
			helloMessage={helloMessage}
			id={id}
			title={title}
			body={body}
			user={user}
			comments={comments}
		/>
	);
}

export default PostDetailsUI;
