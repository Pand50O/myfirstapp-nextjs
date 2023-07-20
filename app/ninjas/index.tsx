type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const dynamic = 'force-static';

export default async function Ninjas() {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  // return <h1>{posts.title}</h1>
  return (
    <div>
      <h1>All posts</h1>
      {posts.map((post: Post) => {
        return (
          <>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </>
        )
      })}

    </div>
  )
}