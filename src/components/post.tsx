import type { Comment as CommentType } from "@/api/types";
import CommentList from "@/components/comment-list";
import { NavLink } from "react-router-dom";

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
		<article className="flex flex-col ">
			<NavLink key={`post-${id}`} to={`/post/${id}`}>
				<section className="flex flex-col gap-4 border-2 border-r-2 rounded-lg rounded-bl-none p-4 hover:border-blue-800">
					<h2 className="text-xl capitalize">{title}</h2>
					<p className="text-base capitalize pl-2">{body}</p>
					<span className="flex justify-between px-2">
						<p className="text-sm	text-green-500">
							Number of comments: {commentCount}
						</p>
						<p className="text-sm text-blue-500">{user}</p>
					</span>
				</section>
			</NavLink>

			<section className="border-l-2 pl-8 flex flex-col gap-4">
				<CommentList comments={comments} helloMessage={helloMessage} />
			</section>
		</article>
	);
}

export default Post;
