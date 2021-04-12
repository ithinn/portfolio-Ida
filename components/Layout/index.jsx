import Header from "../Header";
import Head from "next/head"

function Layout( {children, home, about } ) {
    return(
        <>  
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/hsc6lry.css"/>
                <title>Ida Jørgensen Thinn - Portfolio</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {home ? <Header page="home"/> : <Header page="about"/>}
            
    
            <main>{children}</main>
        </>
    )
}

export default Layout;