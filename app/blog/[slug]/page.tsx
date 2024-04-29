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
    <article className="mb-32 mt-24 ">
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
      <h1 className=" text-3xl font-semibold md:text-5xl mb-2">{post.title}</h1>
      <div className="flex items-center mt-8 gap-3 px-2">
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
      <div className="relative mt-16 rounded sm:mx-0 w-full h-52 md:h-96">
        <Image
          alt={post.title}
          src={post?.coverImage || ""}
          fill
          className="object-cover rounded object-center"
          priority
        />
      </div>

      <div className="max-w-[800px] mt-8  mx-auto lg:border-l border-gray-6">
        <Markdown className="prose prose-lg  prose-gray max-w-[700px] mx-auto ">
          {post.content || ""}
        </Markdown>
      </div>
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
