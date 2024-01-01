// import siteMetadata from "@/utils/siteMetaData";

import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postPathsQuery, tagsQuery } from "@/sanity/lib/queries";
import { siteMetadata } from "@/utils/siteMetaData";

export default async function sitemap() {
  // Get all posts.
  const postPaths = await client.fetch(postPathsQuery);

   // Get all tags.
   const allTags = await client.fetch(tagsQuery);

  const postMaps = postPaths.map((post: any) => ({
    url: `${siteMetadata.siteUrl}/blog/${post.params.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  const tagMaps = allTags.map((tag: any) => ({
    url: `${siteMetadata.siteUrl}/tags/${tag.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const routes = ["", "/about", "/blog"].map((route) => ({
    url: `${siteMetadata.siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 1,
  }));

  return [...routes, ...postMaps, ...tagMaps];
}
