import Head from '@/components/infra/Head'
import Header from '../components/infra/Header/index'
import HomeBody from '@/components/Home/HomeBody'

export async function getStaticProps(context) {
    // Get external data from the file system, API, DB, etc.
    const GAID = process.env.GOOGLE_ANALYTICS_ID
    console.log(GAID)


    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
        props: {
            GAID
        }
    }
}

export default function Home({ GAID }) {

    return (
        <>
            <Head
                title="The BPM - Home"
                googleAnalyticsId={GAID}
            />
            <Header/>
            <HomeBody/>
        
        </>
    )
}