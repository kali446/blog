import { urlForImage } from "@/lib/image";

export async function getHeadings(
  source: string,
): Promise<{ text: string; level: number }[]> {
  // Get each line individually, and filter out anything that
  // isn't a heading.
  const headingLines = source.split("\n").filter((line: string) => {
    return line.match(/^###*\s/);
  });

  // Transform the string '## Some text' into an object
  // with the shape '{ text: 'Some text', level: 2 }'
  return headingLines.map((raw: string) => {
    const text = raw.replace(/^###*\s/, "");
    // I only care about h2 and h3.
    // If I wanted more levels, I'd need to count the
    // number of #s.
    const level: number = raw.slice(0, 3) === "###" ? 3 : 2;

    return { text, level };
  });
}

export const isBrowser = () => typeof window !== "undefined";

export const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str;
  }

  return str.slice(0, num);
};

interface GenerateImageProps {
  thumbnail: any | null;
  alternativeImage?: string;
  size: {
    height: number;
    width: number;
  };
}

export const generateImageUrl = ({
  thumbnail,
  alternativeImage,
  size: { height, width },
}: GenerateImageProps) => {
  if (thumbnail.asset?._ref) {
    return urlForImage(thumbnail).height(height).width(width).fit("crop").url();
  } else {
    return alternativeImage ? alternativeImage : "";
  }
};

export const DATE_FORMAT = "LL";

export const SEARCH_RESUTS_LIMIT = 1;
export const CATEGORY_RESULTS_LIMIT = 2;
export const AUTHOR_RESULTS_LIMIT = 2;
