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

// Get the latest 6 posts
export const recentPostsQuery = groq`*[_type == "post" && defined(slug.current)]{
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
  } | order(publishedAt desc)[0...6]`

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
  ...,
  "slug": slug.current,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 150 ),
  author->,
  tags[]->{..., "slug": slug.current},
  mainImage {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
  "related": *[_type == "post" && slug.current != $slug && count(tags[@._ref in ^.^.tags[]._ref]) > 0] {
     title,
     publishedAt,
      "slug": slug.current,
      mainImage {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
  tags[]->{..., "slug": slug.current},
   } | order(publishedAt desc, _createdAt desc) [0..2] ,
  "recent": *[_type == "post" && defined(slug.current) && slug.current != $slug]{
    title,
     publishedAt,
  "slug": slug.current,
  author->,
  tags[]->{..., "slug": slug.current},
  mainImage {
    "image": asset,
    "lqip": asset->metadata.lqip,
    "dimensions": asset->metadata.dimensions,
    alt,
  },
  } | order(publishedAt desc)[0...2]
  }`

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`
export const tagsQuery = groq`*[_type=="tag"]{
  title,
  "slug": slug.current,
  description
}`

// Get blog featured posts and blog home cover post
export const featuredAndHomeCoverPostsQuery = groq`*[_type == 'showCasePost'][0] {
  'featuredPosts': featuredPosts[]{
     'title': post->title,
     'slug': post->slug.current,
     'author': post->author->,
      'publishedAt': post->publishedAt,
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
      description,
      mainImage {
        "image": asset->url,
        "lqip": asset->metadata.lqip,
        alt,
      },
    }
  }
   }`
