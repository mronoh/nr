/* eslint-disable @next/next/no-html-link-for-pages */

export function PreviewBanner() {
  return (
    <div className='bg-black p-3 text-center text-sm text-white xs:text-base'>
      {'Previewing drafts. '}
      <a
        className='underline transition hover:opacity-50'
        href='/api/exit-preview'
        title='Back to published button'
      >
        Back to published
      </a>
    </div>
  )
}
