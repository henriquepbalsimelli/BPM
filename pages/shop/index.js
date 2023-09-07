import Head from '@/components/infra/Head'
import Link from '../../components/infra/Link'
import Header from '@/components/infra/Header'

export default function Shop() {
    return (
        <>
            <Head
                title="The BPM - Loja"
            />
            <Header />
            <h1>Shop</h1>
            <Link href="/">
               Return Home
            </Link>
        </>
    )
}