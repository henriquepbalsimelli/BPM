import Link from '../../components/infra/Link'
import dados from '../../public/data/dados.json'

export async function getStaticProps(context) {
    // Get external data from the file system, API, DB, etc.
    const posts = dados.posts


    // The value of the `props` key will be
    //  passed to the `Home` component
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