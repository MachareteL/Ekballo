import { getSession } from "next-auth/react";
import bateria from '../../../public/imagens/bateria.jpg'
import ingles from '../../../public/imagens/ingles.png'
import reforco from '../../../public/imagens/reforco.jpg'
import luta from '../../../public/imagens/fight.jpeg'
import violao from '../../../public/imagens/violao.jpg'
import Image from "next/image";
import { handleEdit } from '../matricula/alunos'
import Link from "next/link";
import { PaperClipIcon } from '@heroicons/react/20/solid'

// TODO GET SERVER SIDE PROPS THROUGH AN API REQUEST TO THE DB OVER A NEW API FILE /API/REQUEST


export default function estado(et) {
    const matriculas = et.data
    console.log(matriculas)
    if (matriculas.length == 0) {
        return (
            <div className="min-h-screen w-screen">
                <h1 className="text-2xl font-medium text-center pt-8">
                    Aparentemente você ainda não está matriculado em nenhum dos nossos cursos
                </h1>
                <br />
                <h1 className="text-lg italic text-center"> <Link href="/matricula" className="text-indigo-500">Clique aqui</Link> para se matricular</h1>
            </div>
        )
    }
    console.log(typeof (matriculas.data))
    console.log(new Date(matriculas.data))
    return (
        <>
            


                    <div key={matricula._id} class="relative flex flex-col mx-4 my-8 md:flex-row md:max-w-xl rounded-lg bg-white shadow-xl">
                        <Image class="w-full h-60 md:h-auto object-cover md:w-60 rounded-t-lg md:rounded-none md:rounded-l-lg" src={(matricula.curso == 'bateria') ? bateria : (matricula.curso) == 'ingles' ? ingles : (matricula.curso) == 'reforco' ? reforco : (matricula.curso) == 'violao' ? violao : luta} alt="teste" />
                        <div className="backdrop-blur-sm absolute top-0 left-0 w-full h-60 justify-center items-center flex sm:hidden">
                            <h5 class="text-white text-4xl font-bold">{(matricula.curso).toUpperCase()}</h5>
                        </div>
                        

                        <h1 className="text-center text-4xl font-bold p-12">Suas matrículas</h1>
            <div class="grid sm:grid-cols-3  sm:flex-row sm:justify-center">
                {matriculas.map((matricula) => (
                    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Informações da Matrícula</h3>
                            <p className="mt-1 max-w-2xl text-xs text-gray-500">Detalhes do registro do requerimento da matrícula.</p>
                        </div>
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Nome completo</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{matricula.nome}</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Curso</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{matricula.curso}</dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{matricula.email}</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Situação da matricula</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{matricula.situacao}</dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Sobre o curso</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                        qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                        pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                    </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"></dd>
                                </div>
                            </dl>
                        </div>
                    </div>





                    </div>
                ))}
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {
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
    return {
        props: et,
    }
}