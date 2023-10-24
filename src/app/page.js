// https://youtu.be/Hiabp1GY8fA?si=LCYcRjvqLVSr51up
// https://nextjs.org/blog/next-13
import getPosts from '@/components/getPosts';
import PostPreview from '@/components/PostPreview';

export default function Home() {
  const posts = getPosts()
  const previews = posts.map ( post => 
    <PostPreview key={post.slug} {...post} />
  ) 

  return (
    <>
    <h1>Blog</h1> 
    <div>{previews}</div>
    </>
  )
}