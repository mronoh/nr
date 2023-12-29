'use client'

import Post from './Blog'
import { useParams } from 'next/navigation'
import type { SanityDocument } from '@sanity/client'
import { useLiveQuery } from '@sanity/preview-kit'
import { postQuery } from '@/sanity/lib/queries'

export default function PreviewBlog({ post }: { post: SanityDocument }) {
  const params = useParams()
  const [data] = useLiveQuery(post, postQuery, params)

  return <Post post={data} />
}
