import Link from '../../../components/infra/Link/index'
import { useRouter } from 'next/router';

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    };
}

export async function getStaticProps(context) {

    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
        .then((res) => res.json())

    return {
        props: {
            post
        }
    }
}

export default function VideosAndAnimations({ post }) {
    return (
        <>
            <h1>Videos e animações</h1>
            <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
            <Link href="/">
                Return Home
            </Link>
        </>
    )
}