import type { Comment as CommentType } from "@/api/types";
import Comment from "@components/comment";
type Props = {
	helloMessage: string;
	id: number;
	title: string;
	body: string;
	user: string;
	comments: CommentType[];
};

function Post({ helloMessage, id, title, body, user, comments }: Props) {
	console.log(`${helloMessage} post ${id}.`);

	const commentCount = comments.length;

	return (
		<article className="p-4 flex flex-col">
			<div>
				<h2 className="text-xl capitalize">{title}</h2>
				<p className="text-base capitalize">{body}</p>
				<span className="flex justify-between">
					<p className="text-sm	">Number of comments: {commentCount}</p>
					<p className="text-sm">{user}</p>
				</span>
			</div>

			{comments.map(({ id, name, email, body, postId }) => (
				<span className="px-6 py-2" key={`post-${postId}-comment-${id}`}>
					<Comment
						helloMessage={helloMessage}
						id={id}
						name={name}
						email={email}
						body={body}
						postId={postId}
					/>
				</span>
			))}
		</article>
	);
}

export default Post;
