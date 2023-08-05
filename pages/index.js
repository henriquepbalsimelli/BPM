import Head from '@/components/infra/Head'
import Header from '../components/infra/Header/index'
import HomeBody from '@/components/Home/HomeBody'


export default function Home({ posts }) {

    return (
        <>
            <Head
                title="The BPM - Home"
            />
            <Header/>
            <HomeBody
                data={posts}
            />
        
        </>
    )
}