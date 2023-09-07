import Head from '@/components/infra/Head'
import Link from '../../components/infra/Link'
import getData  from '../../services/index'
import Header from '@/components/infra/Header'

export async function getStaticProps(context) {
    const data = await getData()

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