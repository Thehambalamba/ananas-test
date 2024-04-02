import type { Comment as CommentType } from "@/api/types";
import CommentList from "@/components/comment-list";

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
			<CommentList comments={comments} helloMessage={helloMessage} />
		</article>
	);
}

export default Post;
