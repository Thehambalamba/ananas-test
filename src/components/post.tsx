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
	linkTo?: string;
};

function Post({
	helloMessage,
	id,
	title,
	body,
	user,
	comments,
	linkTo,
}: Props) {
	console.log(`${helloMessage} post ${id}.`);

	const commentCount = comments.length;

	const stylePost = linkTo?.length
		? "flex flex-col gap-4 border-2 border-r-2 rounded-lg rounded-bl-none p-4 hover:border-blue-800"
		: "flex flex-col gap-4 border-2 border-r-2 rounded-lg rounded-bl-none p-4 ";

	const PostContent = (
		<section className={stylePost}>
			<h2 className="text-xl capitalize font-medium">{title}</h2>
			<p className="text-base capitalize pl-2">{body}</p>
			<span className="flex justify-between px-2">
				<p className="text-sm	text-green-500">
					Number of comments: {commentCount}
				</p>
				<p className="text-sm text-blue-500">{user}</p>
			</span>
		</section>
	);

	return (
		<article className="flex flex-col ">
			{linkTo?.length ? (
				<NavLink to={linkTo}>{PostContent}</NavLink>
			) : (
				PostContent
			)}

			<section className="border-l-2 pl-8 flex flex-col gap-4">
				<CommentList comments={comments} helloMessage={helloMessage} />
			</section>
		</article>
	);
}

export default Post;
