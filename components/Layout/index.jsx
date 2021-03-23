import Header from "../Header";
import Head from "next/head"

function Layout( {children} ) {
    return(
        <>  
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/gsa0dnm.css"></link>
            </Head>
            <Header/>
    
            <main>{children}</main>
        </>
    )
}

export default Layout;