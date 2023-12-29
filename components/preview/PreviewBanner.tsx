/* eslint-disable @next/next/no-html-link-for-pages */

export function PreviewBanner() {
  return (
    <div className="p-3 text-center text-white bg-black">
      {'Previewing drafts. '}
      <a
        className="underline transition hover:opacity-50"
        href="/api/exit-preview"
      >
        Back to published
      </a>
    </div>
  )
}