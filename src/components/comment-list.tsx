import type { Comment as CommentType } from "@/api/types";
import Comment from "@/components/comment";

const COMPONENT_NAME = "<CommentList />";

type Props = { comments: CommentType[]; helloMessage: string };

function CommentList({ comments, helloMessage }: Props) {
	console.log(`${helloMessage} ${COMPONENT_NAME}.`);

	return (
		<>
			{comments.map(({ id, name, email, body, postId }) => (
				<Comment
					key={`post-${postId}-comment-${id}`}
					helloMessage={helloMessage}
					id={id}
					name={name}
					email={email}
					body={body}
					postId={postId}
				/>
			))}
		</>
	);
}

export default CommentList;
