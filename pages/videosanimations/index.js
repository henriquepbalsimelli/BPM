import Head from '@/components/infra/Head'
import Link from '../../components/infra/Link'
import Header from '@/components/infra/Header'

export async function getStaticProps(context) {
    const data = {
        data: []
    }

    const posts = data.data

    return {
        props: {
            posts
        }
    }
}

export default function VideosAnimationsIndex({ posts }) {
    return (
        <>
            <Head
                title="The BPM - Galeria de arte"
            />
            <Header />
            <main>
                {
                    posts.map((post) => {
                        return (
                            <div key={post.id}>
                                <Link href={`/videosanimations/posts/${post.id}`}>
                                    <h1>{post.title}</h1>
                                </Link>
                            </div>
                        )
                    })
                }
            </main>
        </>
    )
}