import type { Comment, Post, User } from "@api/types";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@utils/constants";

const COMPONENT_NAME = "<Posts />";

interface Props {
	helloMessage: string;
}

function Posts({ helloMessage }: Props) {
	console.log(`${helloMessage} ${COMPONENT_NAME}.`);

	const { data: posts } = useQuery<Post[]>({ queryKey: [QueryKeys.POSTS] });
	const { data: comments } = useQuery<Comment[]>({
		queryKey: [QueryKeys.COMMENTS],
	});
	const { data: users } = useQuery<User[]>({ queryKey: [QueryKeys.USERS] });

	return posts?.map(({ id: postId, title, body, userId }) => (
		<article key={postId} className="p-4 flex justify-between">
			<div>
				<h2 className="text-xl capitalize">{title}</h2>
				<p className="text-base capitalize">{body}</p>
			</div>
			<div>
				<div>Author: {users?.find(({ id }) => id === userId)?.name}</div>
				<div>
					Number of comments:{" "}
					{
						comments?.filter(
							({ postId: commentPostId }) => commentPostId === postId,
						).length
					}
				</div>
			</div>
		</article>
	));
}

export default Posts;
