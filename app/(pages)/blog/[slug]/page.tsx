import Image from "next/image";
import { Metadata } from "next";
import { OstDocument } from "outstatic";
import Markdown from "react-markdown";
import { getDocumentSlugs, load } from "outstatic/server";
import DateFormatter from "@/components/date-formatter";
import { absoluteUrl } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";

type Post = {
  tags: { value: string; label: string }[];
} & OstDocument;

interface Params {
  params: {
    slug: string;
  };
}

export async function generateMetadata(params: Params): Promise<Metadata> {
  const post = await getData(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(`/posts/${post.slug}`),
      images: [
        {
          url: absoluteUrl(post?.coverImage || "/images/og-image.png"),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: absoluteUrl(post?.coverImage || "/images/og-image.png"),
    },
  };
}

export default async function Post(params: Params) {
  const post = await getData(params);
  return (
    <article className="mb-32 container">
      {Array.isArray(post?.tags)
        ? post.tags.map(({ label }) => (
            <span
              key="label"
              className="inline-block bg-gray-3 rounded-full px-3 py-1 text-sm font-semibold text-gray-11 mr-2 mb-2"
            >
              {label}
            </span>
          ))
        : null}
      <h1 className="font-primary text-2xl font-bold md:text-4xl mb-2">
        {post.title}
      </h1>
      <div className="relative mt-4 rounded sm:mx-0 w-full h-52 md:h-96">
        <Image
          alt={post.title}
          src={post?.coverImage || ""}
          fill
          className="object-cover rounded object-center"
          priority
        />
      </div>
      <div className="flex items-center gap-3 px-2">
        <Image
          alt=""
          src="https://avatars.githubusercontent.com/u/31413538?v=4"
          width={32}
          height={32}
          className="rounded-full select-none"
        />
        <div className="text-sm pt-2 text-gray-11 flex  justify-between grow">
          <div>Jeeho Ahn</div>
          <div>
            <DateFormatter dateString={post.publishedAt} />
          </div>
        </div>
      </div>
      <hr className="border-gray-9  my-4" />
      <Markdown className="prose prose-invert prose-gray">
        {post.content || ""}
      </Markdown>
    </article>
  );
}

async function getData({ params }: Params) {
  const db = await load();

  const post = await db
    .find<Post>({ collection: "posts", slug: params.slug }, [
      "title",
      "publishedAt",
      "description",
      "slug",
      "author",
      "content",
      "coverImage",
      "tags",
    ])
    .first();

  if (!post) {
    notFound();
  }

  return {
    ...post,
  };
}

export async function generateStaticParams() {
  const posts = getDocumentSlugs("posts");
  return posts.map((slug) => ({ slug }));
}
