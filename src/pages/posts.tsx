import type { PostsWithCommentsAndUser } from "@/api/types";
import Post from "@/components/post";
import Search from "@/components/search";
import withAllPostsData from "@/hooks/hoc/with-all-posts-data";
import React from "react";

const COMPONENT_NAME = "<Posts />";

interface Props {
	helloMessage: string;
	postsData: PostsWithCommentsAndUser[] | undefined;
}

function Posts({ helloMessage, postsData }: Props) {
	console.log(`${helloMessage} ${COMPONENT_NAME}.`);

	return (
		<div className="flex flex-col gap-6">
			<section>
				<p className="text-2xl">Posts</p>
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

						return (
							<section>
								<input
									type="text"
									value={searchQuery}
									onChange={(e) => {
										handleSearch(e.target.value);
									}}
									placeholder="Search posts..."
								/>
								{filteredPosts?.map(({ id, title, body, user, comments }) => (
									<Post
										key={`post-${id}`}
										id={id}
										helloMessage={helloMessage}
										title={title}
										body={body}
										user={user}
										comments={comments}
									/>
								))}
							</section>
						);
					}}
				</Search>
			</section>
		</div>
	);
}

export default withAllPostsData(Posts);
