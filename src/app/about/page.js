import Image from "next/image"

export const metadata = {
    title: "About Jose"
}

function About() {
    return (
        <section>
            <h1>About</h1>
            <hr />
            <Image src="/avatar.png"
                height={256}
                width={256}
                alt="Avatar of the author"
                placeholder="blur"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                style={{marginRight: '20px', borderRadius: '50%', float: 'left'}}
            />
            <p>Hey, I am JAMJ200. I am vocational training proffesor of Computer Science in Spain. </p>
            <p>This, what you see here, is just an experiment to develop my competence in coding the NextJS framework.
So, basically, it is a fictitious blog.</p>
            <p style={{ clear: 'both' }}></p>
        </section>
    )
}

export default About