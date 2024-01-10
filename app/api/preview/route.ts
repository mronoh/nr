import { previewSecretId } from '@/sanity/env'
import { resolveHref } from '@/sanity/lib/sanity.links'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')
  const type = searchParams.get('type')

  // SANITY_PREVIEW_SECRET is the same secret from above resolve preivew url.
  if (secret !== previewSecretId || !slug) {
    return new Response('Invalid token', { status: 401 })
  }

  const href = resolveHref(type!, slug)

  draftMode().enable()
  redirect(href!)
}
