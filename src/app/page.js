import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1>Home Page</h1>
      <hr /><br />
      <h3>Nothing here yet</h3>
      <div>
        <p>Try to visit the following links:</p>
        <ul>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </div>
    </section>
  )
}