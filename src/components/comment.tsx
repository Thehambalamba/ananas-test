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
		<>
			<div className="w-[33px] border-b-2 top-[18px] relative right-8" />
			<div className="flex flex-col gap-2 border-l-2 p-4 border-b-2">
				<div className="flex justify-between">
					<p className="text-base capitalize font-medium">{name}</p>
					<p className="text-sm text-blue-400">{email}</p>
				</div>
				<p className="text-sm pl-2 capitalize">{body}</p>
			</div>
		</>
	);
}

export default Comment;
