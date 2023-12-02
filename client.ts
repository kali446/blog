import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "jg0vxk9b",
  dataset: "production",
  apiVersion: "2021-10-21", // Update to the latest API version
  useCdn: true, // Enable CDN caching
});

export default client;
