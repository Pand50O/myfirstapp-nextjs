import styles from './page.module.css';
import Counter from '../components/Counter';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/route';
import { Suspense } from 'react';
import Ninjas from './ninjas';

export default async function Home() {
  // throw new Error('This is an Error')
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
    // return <p>You muse be signed in...</p>
  }

  return (
    <main>
      <h1>Home /</h1>
      <Counter />
      <Suspense fallback={<p>Loading posts9999999999...</p>}>
        <Ninjas />
      </Suspense>
    </main>
  )
}
