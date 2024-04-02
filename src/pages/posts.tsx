import type { PostsWithCommentsAndUser } from "@/api/types";
import Post from "@/components/post/post";
import Search from "@/components/search/search";
import withAllPostsData from "@/hooks/hoc/with-all-posts-data";
import React from "react";

const COMPONENT_NAME = "<Posts />";

type Props = {
	helloMessage: string;
	postsData: PostsWithCommentsAndUser[] | undefined;
};

function Posts({ helloMessage, postsData }: Props) {
	console.log(`${helloMessage} ${COMPONENT_NAME}.`);

	return (
		<div className="flex flex-col gap-6">
			<section>
				<p className="text-2xl font-bold">Posts</p>
			</section>
			<section>
				<Search helloMessage={helloMessage}>
					{(searchQuery, handleSearch) => {
						const filteredPosts = React.useMemo(() => {
							if (!postsData) return [];
							return postsData.filter((post) =>
								post.title.toLowerCase().includes(searchQuery.toLowerCase()),
							);
						}, [postsData, searchQuery]);

						const hasPosts = filteredPosts.length;

						return (
							<section className="flex flex-col gap-6">
								<input
									type="text"
									className="border-2 p-2 rounded-lg w-1/6"
									value={searchQuery}
									onChange={(e) => {
										handleSearch(e.target.value);
									}}
									placeholder="Search posts..."
								/>
								{hasPosts ? (
									<div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
										{filteredPosts?.map(({ id, title, body, user, comments }) => (
											<Post
												key={`post-${id}`}
												id={id}
												helloMessage={helloMessage}
												title={title}
												body={body}
												user={user}
												comments={comments}
												linkTo={`/post/${id}`}
											/>
										))}
									</div>
								) : (
									<p className="text-xl">No posts present.</p>
								)}
							</section>
						);
					}}
				</Search>
			</section>
		</div>
	);
}

export default withAllPostsData(Posts);
