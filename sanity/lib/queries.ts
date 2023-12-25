import { groq } from 'next-sanity'

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
  ...,
  "slug": slug.current,
  author->,
  tags[]->{..., "slug": slug.current},
  mainImage {
    "image": asset,
    "lqip": asset->metadata.lqip,
    "dimensions": asset->metadata.dimensions,
    alt,
  },
  } | order(publishedAt desc)`

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
  ...,
  author->,
  tags[]->{..., "slug": slug.current},
  mainImage {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
  }`

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`

// Get blog featured posts and blog home cover post
export const featuredAndHomeCoverPostsQuery = groq`*[_type == 'showCasePost'][0] {
  'featuredPosts': featuredPosts[]{
     'title': post->title,
     'slug': post->slug.current,
     'author': post->author->,
     'tags': post->tags[]->{..., "slug": slug.current},
     'mainImage': post->mainImage{
         "image": asset->url,
         "lqip": asset->metadata.lqip,
         alt,
       },
   },
   'homeCoverPost': homeCoverPost {
    post->{
      title,
      "slug": slug.current,
      author->,
      tags[]->{..., "slug": slug.current},
      mainImage {
        "image": asset->url,
        "lqip": asset->metadata.lqip,
        alt,
      },
    }
  }
   }`
