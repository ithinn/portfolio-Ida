const Cosmic = require('cosmicjs')
const api = Cosmic()

const bucket = api.bucket({
    slug: "un-peacekeeping-operations-development",
    read_key: '4x1nPKP7u1jO55alIKtZJcF9SWndY2R171brbo8crgEUb4QM1n'
})



function Test({conflicts}) {
    console.log("BUCKET", bucket)

    console.log("CONFLITS", conflicts)
    return(
        <div className="container">

            <h2>hei</h2>
           
        </div>
    )
}
export default Test;
/*
export async function getServerSideProps() {
    console.log("TEST")

    try {
        const data = await bucket.getObjects({
            type: 'conflicts',
            props: 'slug,title,metadata'
        })
    
        console.log("DATA", data);

        const conflicts = await data.objects
    
        console.log(conflicts);
    }
    catch (error){
        console.log("ERROR", error);
    }
    
    
    return {
        props: {
            conflicts
        }
    }
}*/

export async function getServerSideProps(context) {
    console.log("TESTTEST")
    
    return {

      props: {}, // will be passed to the page component as props
    }
  }



/*
 {conflicts.map(post => (
                <div key={post.slug}>
                    <h3>{post.title}</h3>
                </div>
            ))}*/ 