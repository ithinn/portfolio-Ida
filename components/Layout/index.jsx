import Header from "../Header";
import Head from "next/head"

function Layout( {children} ) {
    return(
        <>  
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/hsc6lry.css"/>
            </Head>
            <Header/>
    
            <main>{children}</main>
        </>
    )
}

export default Layout;