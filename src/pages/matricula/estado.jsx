import { getSession } from "next-auth/react";

// TODO GET SERVER SIDE PROPS THROUGH AN API REQUEST TO THE DB OVER A NEW API FILE /API/REQUEST


export default function estado(et){
    const matriculas = et.data
    console.log(matriculas)
    return(
        <>
        <h1 className="text-xl font-bold">Matriculas</h1>
        <div class="flex justify-center">
            {matriculas.map((matricula)=>(
                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                  <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                  <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{matricula.curso}</h5>
                    <p class="text-gray-700 text-base mb-4">
                      Você está matriculado no curso de {matricula.curso}
                    </p>
                    <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                  </div>
                </div>
            ))}
            </div>
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