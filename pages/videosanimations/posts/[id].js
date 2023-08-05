import Link from '../../../components/infra/Link/index'
import dados from '../../../public/data/dados.json'



export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const posts = dados.posts

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    // { fallback: true } means other routes will be rendered on-demand if the page has not been generated.
    // { fallback: 'blocking' } is similar to true, but instead of rendering the page on-demand, the user will see a loading state while the page is being server-side rendered.
    return { paths, fallback: false }
}

export async function getStaticProps(context) {
    // Get external data from the file system, API, DB, etc.
    const posts = dados.posts

    const pagePost = posts.find((post) => {
        return post.id == context.params.id
    })

    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
        props: {
            pagePost
        }
    }
}

export default function VideosAndAnimations({ pagePost }) {
    return (
        <>
            <h1>Videos e animações</h1>
            <div key={pagePost.id}>
                <h1>{pagePost.title}</h1>
                <p>{pagePost.content}</p>
            </div>
            <Link href="/">
                Return Home
            </Link>
        </>
    )
}