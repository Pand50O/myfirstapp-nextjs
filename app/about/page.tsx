// export const dynamic = 'force-static'

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Nextjs',
  description: 'Generated by create next app',
};

export default async function About() {

  return (
    <main>
      <h1>About</h1>
      <p>We are a social media company!</p>
    </main>
  )
}