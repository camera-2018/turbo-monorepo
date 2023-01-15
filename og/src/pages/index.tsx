import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      <Seo />

      <main>
        <section className='bg-gray-100'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1>Open Graph Generator</h1>
            <p className='mt-2 text-sm text-gray-600'>
              Made for personal use using{' '}
              <CustomLink href='https://github.com/neg4n/next-api-og-image'>
                next-api-og-image
              </CustomLink>
            </p>
            <div className='mt-4 flex flex-wrap gap-2 text-sm text-gray-500'>
              <ButtonLink href='https://github.com/theodorusclarence/og'>
                See the repository
              </ButtonLink>
              <ButtonLink variant='light' href='/builder'>
                Link Builder
              </ButtonLink>
            </div>

            <footer className='absolute bottom-2 text-gray-800'>
              © {new Date().getFullYear()} By{' '}
              <CustomLink href='https://theodorusclarence.com?ref=og'>
                Theodorus Clarence
              </CustomLink>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
