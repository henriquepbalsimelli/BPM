import Link from '../../components/infra/Link'
import getData  from '../../services/index'

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