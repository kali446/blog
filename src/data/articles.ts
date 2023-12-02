import __posts from "./json/__posts.json";

export const DEMO_ARTICLES = __posts.map((post, index) => {
  return {
    ...post,
  };
});
