import type { Comment as CommentType } from "@/api/types";
import Comment from "@/components/comment/comment";

export const COMPONENT_NAME = "<CommentList />";

type Props = { comments: CommentType[]; helloMessage: string };

function CommentList({ comments, helloMessage }: Props) {
	console.log(`${helloMessage} ${COMPONENT_NAME}.`);

	const hasComments = comments.length;

	return (
		<>
			{hasComments ? (
				comments.map(({ id, name, email, body, postId }) => (
					<Comment
						key={`post-${postId}-comment-${id}`}
						helloMessage={helloMessage}
						id={id}
						name={name}
						email={email}
						body={body}
						postId={postId}
					/>
				))
			) : (
				<p className="text-xl">No comments present.</p>
			)}
		</>
	);
}

export default CommentList;
