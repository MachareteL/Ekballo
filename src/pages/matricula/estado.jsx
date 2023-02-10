import { getSession } from "next-auth/react";

// TODO GET SERVER SIDE PROPS THROUGH AN API REQUEST TO THE DB OVER A NEW API FILE /API/REQUEST


export default function estado(et){
    const matriculas = et.data
    console.log(matriculas)
    return(
        <>
        <h1 className="text-xl font-bold">Matriculas</h1>
            {matriculas.map((matricula)=>(
                <ul key={matricula._id}>
                    <li>{matricula.nome}</li>
                    <li>{matricula.telefone}</li>
                </ul>
            ))}
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

    const rest = await fetch('https://ekballo.vercel.app/api/form/verify', {
        method: 'POST',
        'Content-Type': 'application/json',
        body: JSON.stringify(session.user.email)
    })

    
    const et = await rest.json()


    return{
        props: et,
    }
}