type Props = {
	helloMessage: string;
	id: number;
	name: string;
	email: string;
	body: string;
	postId: number;
};

function Comment({ helloMessage, id, name, email, body, postId }: Props) {
	console.log(`${helloMessage} post ${postId}, comment ${id}.`);

	return (
		<div className="flex flex-col gap-2">
			<span>{email}</span>
			<span>{name}</span>
			<span>{body}</span>
		</div>
	);
}

export default Comment;
