/* eslint-disable @next/next/no-img-element */
import { getArticleBySlug, getClient } from "@/lib/client";
import { generateImageUrl, getReadingTime, getRelativeDate } from "@/utils";
import { ImageResponse } from "next/server";

export const size = {
  width: 1920,
  height: 1080,
};

export const alt = "Cloned Verse | Blog";
export const contentType = "image/jpeg";

export default async function og({ params }: { params: { slug: string } }) {
  const client = getClient();
  const slug = params.slug;
  const article = await getArticleBySlug(client, slug);

  const thumbnailHeight = size.height;
  const thumbnailWidth = size.width;
  const thumbnailUrl = generateImageUrl({
    thumbnail: article.thumbnail,
    size: {
      height: thumbnailHeight,
      width: thumbnailWidth,
    },
  });

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full flex items-center justify-center">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <img
            tw="flex flex-1"
            src={thumbnailUrl + "&w=1200&h=630&auto=format&q=75"}
            alt={article?.title!!}
          />
          {/* Overlay */}
          <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
        </div>
        <div tw="px-[3rem] flex flex-col text-neutral-50">
          {/* Title */}
          <div tw="text-7xl font-bold">{article?.title}</div>
          {/* Tags */}
          <div tw="flex mt-6 flex-wrap items-center text-4xl text-neutral-200">
            <b>{article.author.name}</b>
            <div tw="w-3 h-3 mx-6 rounded-full bg-neutral-300" />
            <div>{getReadingTime(article.content!!)}</div>
            <div tw="w-3 h-3 mx-6 rounded-full bg-neutral-300" />
            <div>{getRelativeDate(article._createdAt.toString())}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
