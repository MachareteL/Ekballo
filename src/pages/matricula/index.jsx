import logo from "../../../public/favicon.png";
import Image from "next/image";
import { getSession } from "next-auth/react";
import swal from 'sweetalert';
import { useState } from "react";

export default function cadastro(session) {
    const [idade, setIdade] = useState(new Date("1900-01-01"))
    const agora = Date.now()
    const diferenca = (agora - idade)
    const anos = diferenca / (1000 * 3600 * 24) / 365

    const dia = new Date().toLocaleString()

    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
        let data
        // Get data from the form.
        anos <= 18 ? data = {
            nome: event.target.nome.value,
            telefone: event.target.telefone.value,
            email: session.user.email,
            endereco: event.target.endereco.value,
            idade: event.target.idade.value,
            curso: event.target.curso.value,
            responsavel: event.target.responsavel.value,
            documentoPai: event.target.documentoPai.value,
            documentoAluno: event.target.documentoAluno.value,
            situacao: 'pendente',
            data: dia
        } : data = {
            nome: event.target.nome.value,
            telefone: event.target.telefone.value,
            email: session.user.email,
            endereco: event.target.endereco.value,
            idade: event.target.idade.value,
            curso: event.target.curso.value,
            documentoAluno: event.target.documentoAluno.value,
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
        anos <= 18 ? event.target.responsavel.value = "" : 
        anos <= 18 ? event.target.documentoPai.value = "" :
        event.target.idade.value = ""
        event.target.documentoAluno.value = ""
        response.ok? swal(result.result, {icon: 'success'}) : swal(result.error, {icon: 'error'})
    }


    


    return (
        <div className="h-screen">
            <div className="grid container m-auto min-h-full">
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-2 w-11/12 bg-slate-800 m-auto self-center h-3/4 rounded-md items-center sm:w-1/2">
                    <Image priority src={logo} alt="Logo" className="justify-self-center col-span-2" />
                    <div className="flex col-span-2">
                        <label htmlFor="nome" className="text-white mx-4">Nome: </label>
                        <input required type="text" name="nome" id="nome" placeholder="*Nome Completo" className="outline-none focus:border focus:border-b-blue-500 origin-bottom caret-white text-white bg-slate-900 p-2 h-7 w-full mr-4 rounded" />
                    </div>
                    <div className="flex col-span-2">
                        <label htmlFor="telefone" className="text-white mx-4">Telefone: </label>
                        <input required type="number" name="telefone" id="telefone" placeholder="*019 9XXXX-XXXX" className="caret-white text-white bg-slate-900 rounded p-2 h-7 w-full mr-4" />
                    </div>
                    <div className="col-span-1 grid sm:flex">
                        <label htmlFor="idade" className="text-white mx-4">Data de Nascimento: </label>
                        <input required type="date" name="idade" id="idade" className="h-8 ml-4" onChange={(e) => setIdade(new Date(e.target.value))}/>
                    </div>

                    
                    <div className="col-span-1">
                        <label htmlFor="curso" className="text-white mx-4">Curso: </label>
                        <select required name="curso" id="curso" className="bg-slate-900 text-white p-1 rounded">
                            <option value="ingles">Ingl??s</option>
                            <option value="reforco">Refor??o</option>
                            <option value="violao">Viol??o</option>
                            <option value="muay-thai">Muay Thai</option>
                            <option value="bateria">Bateria</option>
                        </select>
                    </div>
                    
                    <div className="flex col-span-2">
                        <label htmlFor="documentoAluno" className="text-white mx-4">Documento do aluno:</label>
                        <input required type="text" name="documentoAluno" id="documentoAluno" placeholder="CPF ou RG" className="caret-white text-white bg-slate-900 p-2 h-7 w-full mr-4 rounded"/>
                    </div>

                    <div className="flex col-span-2">
                        <label htmlFor="endereco" className="text-white mx-4">Endere??o: </label>
                        <input required type="endereco" name="endereco" id="endereco" placeholder="Ex: Bairro Rua Cep" className="caret-white text-white bg-slate-900 p-2 h-7 w-full mr-4 rounded" />
                    </div>


                    {anos <= 18 ?
                        <>
                            <div className="flex col-span-2 ">
                                <label htmlFor="responsavel" className="text-white mx-4">Respons??vel: </label>
                                <input required type="text" name="responsavel" id="responsavel" placeholder="* Nome do Pai ou M??e" className="caret-white text-white bg-slate-900 rounded p-2 h-7 w-full mr-4" />
                            </div>

                            <div className="flex col-span-2">
                                <label htmlFor="documentoPai" className="text-white mx-4">Documento do Respons??vel:</label>
                                <input required type="text" name="documentoPai" id="documentoPai" placeholder="CPF ou RG" className="caret-white text-white bg-slate-900 p-2 h-7 w-full mr-4 rounded" />
                            </div>
                        </>
                        : <></>}

                    <div className="flex col-span-2 items-baseline justify-center">
                        <input required type="checkbox" name="termos" id="termos" />
                        <label htmlFor="termos" className="text-center text-white w-11/12"><a role="button" className="underline" onClick={()=>{swal({title: "TERMOS DE USO E PRIVACIDADE",text:"O Projeto Social Ekballo ?? uma institui????o crist?? e sem fins lucrativos, todos os dados aqui coletados ser??o utilizados somente para os fins de cadastro e registro no banco de dados de alunos da Escola.\n\nEkballo se compromete em n??o divulgar, vender e usar os dados aqui fornecidos para nenhuma outra atividade sen??o contatar alunos e respons??veis em caso de falta, mudan??a de hor??rio ou cancelamento de eventuais aulas e/ou eventos.\n\n Ao aceitar os termos confirmo que autorizo a posse dos meus dados e informa????es pela institui????o Ekballo assim como autorizo que entrem em contato caso necess??rio pelo telefone e/ou email aqui fornecidos.", button: "Aceito"})}}> Li e Concordo</a> com os termos de uso, ciente de todos os termos de politica e privacidade.</label>
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