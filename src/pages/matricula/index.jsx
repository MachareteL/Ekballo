import logo from "../../../public/favicon.png";
import Image from "next/image";
import { getSession } from "next-auth/react";
import swal from 'sweetalert';


export default function cadastro(session) {

    console.log(session)
    const dia = new Date().toLocaleString()
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            nome: event.target.nome.value,
            telefone: event.target.telefone.value,
            email: session.user.email,
            endereco: event.target.endereco.value,
            idade: event.target.idade.value,
            curso: event.target.curso.value,
            responsavel: event.target.responsavel.value,
            situacao: 'pendente',
            data: dia
        }

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        const endpoint = '/api/form'

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }
        // console.log(JSONdata)
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)
        console.log(response)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        console.log(result)
        event.target.nome.value = ""
        event.target.telefone.value = ""
        event.target.endereco.value = ""
        event.target.idade.value = ""
        event.target.curso.value = ""
        event.target.responsavel.value = ""
        response.ok? swal(result.result) : swal(result.error)
    }


    


    return (
        <div className="h-screen bg-gray-900">
            <div className="grid bg-gray-900 container m-auto min-h-full">
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-2 w-11/12 bg-slate-800 m-auto self-center h-3/4 rounded-md items-center sm:w-1/2">
                    <Image priority src={logo} alt="Logo" className="justify-self-center col-span-2" />
                    <div className="flex col-span-2">
                        <label htmlFor="nome" className="text-white mx-4">Nome: </label>
                        <input required type="text" name="nome" id="nome" placeholder="* Nome Completo" className="outline-none focus:border focus:border-b-blue-500 origin-bottom caret-white text-white bg-slate-900 p-2 h-7 w-full mr-4 rounded" />
                    </div>
                    <div className="flex col-span-2">
                        <label htmlFor="telefone" className="text-white mx-4">Telefone: </label>
                        <input required type="tel" name="telefone" id="telefone" placeholder="* (DDD)9 XXXX-XXXX" className="caret-white text-white bg-slate-900 rounded p-2 h-7 w-full mr-4" />
                    </div>
                    <div className="flex col-span-2">
                        <label htmlFor="endereco" className="text-white mx-4">Endereço: </label>
                        <input type="endereco" name="endereco" id="endereco" placeholder="Ex: Bairro Rua Cep" className="caret-white text-white bg-slate-900 p-2 h-7 w-full mr-4 rounded" />
                    </div>


                    <div className="col-span-1 grid sm:flex">
                        <label htmlFor="idade" className="text-white mx-4">Data de Nascimento: </label>
                        <input type="date" name="idade" id="idade" className="h-8 ml-4" />
                    </div>

                    
                    <div className="col-span-1">
                        <label htmlFor="curso" className="text-white mx-4">Curso: </label>
                        <select name="curso" id="curso" className="bg-slate-900 text-white p-1 rounded">
                            <option value="ingles">Inglês</option>
                            <option value="reforo">Reforço</option>
                            <option value="musica">Música</option>
                            <option value="musica">Muai Thay</option>

                        </select>
                    </div>
                    <div className="flex col-span-2 ">
                        <label htmlFor="responsavel" className="text-white mx-4">Responsável: </label>
                        <input required type="text" name="responsavel" id="responsavel" placeholder="* Nome do Pai ou Mâe" className="caret-white text-white bg-slate-900 rounded p-2 h-7 w-full mr-4" />
                    </div>

                    <div className="flex col-span-2 items-baseline justify-center">
                        <input required type="checkbox" name="termos" id="termos" />
                        <label htmlFor="termos" className="text-center text-white w-11/12"><a href="#"> Li e Concordo</a> com os termos de uso, ciente de todos os <a href="#">termos de politica e privacidade.</a></label>
                    </div>
                    <div className="col-span-2 flex justify-end">
                        <button type="submit" className="bg-gray-600 p-2 rounded-lg text-white mr-4 hover:bg-blue-700 active:bg-slate-700">Matricular</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export async function getServerSideProps(context){
    const session = await getSession(context)
    // console.log(session)

    if (!session){
        return{
            redirect:{
                destination: '/login',
                permanent: false
            },
        }
    }
    return{
        props: session 
    }
}