interface Props {
  params: {
    id: number;
  }
}

export default async function UserPost({ params }: Props) {
  const res1 = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const res2 = await fetch('http://localhost:3000/api/content');

  const post = await res1.json();
  const contents = await res2.json();

  console.log(post)
  console.log("Panda")

  return (
    <div>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>

      {
        contents.map((content: any) => {
          return (
            <p>{content.title}</p>
          )
        })
      }
    </div>
  );
}