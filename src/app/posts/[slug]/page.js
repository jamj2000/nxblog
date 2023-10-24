import fs from 'fs'
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPosts from '@/components/getPosts';


const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export function generateStaticParams() {
  const posts = getPosts()
  return posts.map(post => ({ slug: post.slug })) // importante: ({ slug ... })  
  // return [{ slug: 'ssg-ssr' }]
}

function page(props) {
  const slug = props.params.slug
  // const post = getPosts().filter(p => p.slug == slug)
  const post = getPostContent(slug)

  return (
    <div>
      <h1>{post.title}</h1>
      <Markdown>{post.content}</Markdown>
    </div>
  )
}

export default page