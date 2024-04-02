import { fetchPostWithCommentsAndUser } from "@/api/queries";
import type { Comment, Post } from "@/api/types";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@utils/constants";

type WithPostDataProps = {
	helloMessage: string;
	id: number;
	title: string;
	body: string;
	user: string;
	comments: Comment[];
	linkTo?: string;
};

function withPostData<P extends WithPostDataProps>(
	WrappedComponent: React.ComponentType<P>,
) {
	return (
		props: Omit<P, keyof WithPostDataProps> & {
			postId: string;
			helloMessage: string;
		},
	) => {
		const { postId, ...restProps } = props;
		const { data: postData, isLoading } = useQuery<Post>({
			queryKey: [QueryKeys.POSTS, postId],
			queryFn: () => fetchPostWithCommentsAndUser(postId),
		});

		if (isLoading) {
			return <p className="text-lg">Loading post...</p>;
		}

		if (!postData) {
			return <p className="text-lg">Data not available post...</p>;
		}

		// Use 'unknown' as an intermediate step
		const enhancedProps = {
			...restProps,
			...postData,
		} as unknown as P;

		return <WrappedComponent {...enhancedProps} />;
	};
}

export default withPostData;
