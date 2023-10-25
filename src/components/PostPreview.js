import Link from "next/link"

function PostPreview(props) {
    return (
        <article>
            <Link href={`/blog/${props.slug}`}><strong>{props.title}</strong></Link>
            <p>{props.date}</p>
        </article>
    )
}

export default PostPreview