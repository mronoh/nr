import { SanityDocument } from 'sanity'
import { previewSecretId } from '../env'

const remoteUrl = `ngworocks.vercel.app`
const localUrl = `http://localhost:3000`

export function resolveProductionUrl(doc: SanityDocument) {
  const baseUrl =
    window.location.hostname === 'localhost' ? localUrl : remoteUrl
  const previewUrl = new URL(baseUrl)
  const slug: { current: string } = doc.slug as { current: string }
  previewUrl.pathname = `/api/preview`
  previewUrl.searchParams.append(`type`, doc._type.toLowerCase())
  previewUrl.searchParams.append(`secret`, previewSecretId!)
  slug &&
    previewUrl.searchParams.append(
      `slug`,
      `${slug.current ? slug.current : ''}`
    )
  return previewUrl.toString().replaceAll('%2F', '/')
}

export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  switch (documentType) {
    case 'post':
      return slug ? `/blog/${slug}` : '/'
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}
