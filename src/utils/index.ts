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
