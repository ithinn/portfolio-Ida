import Header from "../Header";
import Head from "next/head"

function Layout( {children} ) {
    return(
        <>  
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/hsc6lry.css"/>
                <title>Test</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
    
            <main>{children}</main>
        </>
    )
}

export default Layout;