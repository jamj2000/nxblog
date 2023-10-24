import Link from "next/link"

function PostPreview(props) {
    return (
        <div>
            <Link href={`/posts/${props.slug}`}><strong>{props.title}</strong></Link>
            <p>{props.date}</p>
        </div>
    )
}

export default PostPreview