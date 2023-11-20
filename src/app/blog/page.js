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