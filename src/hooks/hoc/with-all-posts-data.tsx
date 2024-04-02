import { fetchPostsWithCommentsAndUsers } from "@/api/queries";
import type { PostsWithCommentsAndUser } from "@/api/types";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@utils/constants";

interface WithPostsDataProps {
	postsData: PostsWithCommentsAndUser[] | undefined;
}

function withAllPostsData<P extends WithPostsDataProps>(
	WrappedComponent: React.ComponentType<P>,
) {
	return (props: Omit<P, keyof WithPostsDataProps>) => {
		const { data: postsData, isLoading } = useQuery<PostsWithCommentsAndUser[]>(
			{
				queryKey: [QueryKeys.POSTS],
				queryFn: fetchPostsWithCommentsAndUsers,
			},
		);

		if (isLoading) {
			return <p className="text-lg">Loading posts...</p>;
		}

		// Pass the fetched postsData as props to the wrapped component
		return <WrappedComponent {...(props as P)} postsData={postsData} />;
	};
}

export default withAllPostsData;
