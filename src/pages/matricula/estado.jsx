import { getSession } from "next-auth/react";
import bateria from '../../../public/imagens/bateria.jpg'
import ingles from '../../../public/imagens/ingles.png'
import reforco from '../../../public/imagens/bateria.jpg'
import luta from '../../../public/imagens/bateria.jpg'
import Image from "next/image";
// TODO GET SERVER SIDE PROPS THROUGH AN API REQUEST TO THE DB OVER A NEW API FILE /API/REQUEST


export default function estado(et){
    const matriculas = et.data
    console.log(matriculas)
    return(
        <>
        <h1 className="text-xl font-bold">Suas Matriculas</h1>
        <div class="flex flex-col sm:flex-row sm:justify-center">
            {matriculas.map((matricula)=>(
                <div key={matricula._id} class="relative flex flex-col mx-4 my-8 md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                  <Image class="w-full h-60 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={(matricula.curso == 'bateria') ? bateria : (matricula.curso) == 'ingles' ? ingles : (matricula.curso) == 'reforco' ? reforco : luta} alt="teste" />
                  <div class="p-6 flex flex-col justify-start">
                    <div className="backdrop-blur-sm absolute top-0 left-0 w-full h-60 justify-center items-center flex">
                        <h5 class="text-white text-4xl font-bold">{(matricula.curso).toUpperCase()}</h5>
                    </div>
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