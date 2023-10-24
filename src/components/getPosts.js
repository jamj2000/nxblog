import fs from "fs";
import matter from "gray-matter";

function getPosts () {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug: fileName.replace(".md", ""),
      title: matterResult.data.title,
      date: matterResult.data.date,
      content: matterResult.content
    };
  })
  .sort((a, b) =>  (a.date < b.date) ? 1 : -1 ); 

  return posts;
}

export default getPosts;