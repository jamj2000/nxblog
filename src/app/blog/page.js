// https://youtu.be/Hiabp1GY8fA?si=LCYcRjvqLVSr51up
// https://nextjs.org/blog/next-13
// https://nextjs.org/learn/basics/data-fetching/two-forms
import getPosts from '@/components/getPosts';
import PostPreview from '@/components/PostPreview';


export default function Blog() {
  const posts = getPosts()
  const previews = posts.map(post =>
    <PostPreview key={post.slug} {...post} />
  )

  return (
    <section>
      <h1>Blog</h1>
      <hr />
      {previews}
    </section>
  )
}