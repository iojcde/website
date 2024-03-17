import { load } from "outstatic/server";
import Image from "next/image";
import { Post } from "@/app/types/post";
import Link from "next/link";

export default async function Index() {
  const { allPosts } = await getData();

  return (
    <div className="container">
      <h1 className="text-4xl">Blog</h1>
      <div className="mt-8 space-y-4">
        {allPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

const BlogCard = ({ post }: { post: Post }) => (
  <Link
    href={`/blog/${post.slug}`}
    className="border relative block rounded-xl overflow-hidden"
  >
    {post.coverImage ? (
      <div className=" relative sm:mx-0 w-full h-96">
        <Image
          alt={post.title}
          src={post?.coverImage || ""}
          fill
          className="object-cover rounded-t object-center"
          priority
        />
      </div>
    ) : null}
    <div className="p-6">
      <div className="text-2xl font-semibold">{post.title}</div>
      <div className="text-gray-11">{post.description}</div>
    </div>
  </Link>
);

async function getData() {
  const db = await load();

  const allPosts = await db
    .find<Post>({ collection: "posts" }, [
      "title",
      "publishedAt",
      "slug",
      "coverImage",
      "description",
      "tags",
    ])
    .sort({ publishedAt: -1 })
    .toArray();

  return {
    // content,
    allPosts,
  };
}
