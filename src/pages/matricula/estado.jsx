import { getSession } from "next-auth/react";

// TODO GET SERVER SIDE PROPS THROUGH AN API REQUEST TO THE DB OVER A NEW API FILE /API/REQUEST


export default function estado(){
    return(
        <>
            <h1>ola</h1>
        </>
    );
}

export async function getServerSideProps(context){
    const session = await getSession(context)
    // console.log(session.user.email)

    if (!session){
        return{
            redirect:{
                destination: '/login',
                permanent: false
            },
        }
    }
    const rest = await fetch('http://localhost:3000/api/verify', {
        method: 'POST',
        'Content-Type': 'application/json',
        body: JSON.stringify(session.user.email)
    })
    const et = await rest.json()
    // console.log(et)
    return{
        props: session
    }
}