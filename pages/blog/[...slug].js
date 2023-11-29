import { useRouter } from "next/router";

function BlogPostsPage() {
    const router = useRouter();
    console.log(router);

    return <div>The Blog Posts</div>
}

export default BlogPostsPage;