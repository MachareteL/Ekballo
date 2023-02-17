import { getSession } from "next-auth/react"
import { useRouter } from "next/router"
import React from "react";
import { useState } from "react";
import swal from "sweetalert"
import Swal from "sweetalert2";


export async function handleEdit(id) {
  const retorno = await fetch(`/api/form/${id}`, {
    method: 'GET'
  })
  const res = (await retorno.json()).resultado

  Swal.fire({
    title: '<b>Editar Matricula</b>',
    html: `<div>
    <ul>
      <li><strong>Nome:</strong> ${res.nome}</li>
      <li><strong>Documento Aluno: </strong>${res.documentoAluno}</li>
      <li><strong>Endereço:</strong> ${res.endereco}</li>
      <li><strong>Nascimento:</strong> ${res.idade}</li>
      ${res.responsavel ? "<li><strong>Responsável: </strong>" + res.responsavel + "</li>" : ""}
      ${res.documentoPai ? "<li><strong>Documento Responsável: </strong>" + res.documentoPai + "</li>" : ""}
      <li><strong>Curso:</strong> ${res.curso}</li>
      <li><strong>Situação:</strong> ${res.situacao}</li>
    </ul>
    </div>`,
    confirmButtonText: "Confirmar"
  })

}


export async function getServerSideProps(context) {
  const session = await getSession(context)
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/login',
  //       permanent: false
  //     },
  //   }
  // }
  const retorno = await fetch('https://ekballo.vercel.app/api/form')
  const data = await retorno.json()
  const cadastros = data.data

  return {
    props: { cadastros }
  }
}



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Table({ cadastros }) {
  const route = useRouter()
  const [nome, setNome] = useState()
  const [curso, setCurso] = useState()
  const [registro, setRegistro] = useState()
  
  
  async function deleteAluno(id) {

    swal({
      title: "Tem Certeza?",
      text: "Uma vez deletada não será mais possivel recuperar os dados da matrícula!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        return fetch(`/api/form/${id}`, {
          method: 'DELETE'
        })
        .then(()=>swal("A Matricula foi deletada com Sucesso!", {
          icon: "success",
        }))
        .then(()=>route.reload())
      } else {
        swal("A Matricula NÃO foi deletada!", {icon: 'error'});
      }
    });

    // const retorno = await fetch(`/api/form/${id}`, {
    //   method: 'DELETE'
    // })
    // const result = await retorno.json()
    // retorno.ok ? swal(result.resultado, { icon: "success" }).then((value) => { route.reload() }) : swal(result.resultado, { icon: "error" }).then((value) => { route.reload() });

  }


  const handleSelect = async (event, aluno) => {
    console.log("O evento 2 é: " + event.target.value)
    const newState = event.target.value
    const batida = await fetch(`/api/form`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: aluno._id,
        situacao: event.target.value   
      })
    })
    const resultado = await batida.json() 
    swal({icon: "success", text:`O Estado da Matricula foi alterado para ${newState}`})
    .then(()=>route.reload())
  }



  

  function filtro() {
    // Declare variables
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("inputFiltro");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabelaAlunos");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function organizar() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tabelaAlunos");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("td")[0];
        y = rows[i + 1].getElementsByTagName("td")[0];
        // Check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
      switching = false
      break
    }
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="py-3 pl-2">
          <div className="relative max-w-xs">
            <label htmlFor="hs-table-search" className="sr-only">
              Search
            </label>
            <input
              onKeyUp={filtro}
              type="text"
              name="inputFiltro"
              id="inputFiltro"
              className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg
                className="h-3.5 w-3.5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table id="tabelaAlunos" className="w-full divide-y bg-slate-50">
              <thead className="bg-gray-100"> 
                <tr>

                  <th
                    scope="col"
                    className=" hidden items-center px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    ID
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 13l-5 5m0 0l-5-5m5 5V6"
                      />
                    </svg>
                  </th>




                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase border-red-500"
                  >
                    <span className="inline-flex items-center">
                      <button onClick={()=>organizar()}>Nome</button> 
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 11l5-5m0 0l5 5m-5-5v12"
                        />
                      </svg>
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    <span className="inline-flex items-center">
                      Email
                    </span>
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase "
                  >
                    Telefone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                    Curso
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                    Situação
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-start text-gray-500 uppercase"
                  >
                    Detalhes
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Delete
                  </th>

                </tr>
              </thead>



              <tbody className="divide-y divide-gray-200">
                {cadastros.map((aluno) => (
                  <tr key={aluno._id}>
                    <td className="pl-6 py-4 text-sm font-medium text-gray-800 hidden">
                      {aluno._id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {aluno.nome}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {aluno.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {aluno.telefone}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {aluno.curso}
                    </td>
                    <td className={classNames(
                      (aluno.situacao == 'pendente') ? 'text-yellow-500' : (aluno.situacao == 'matriculado') ? 'text-green-500' : 'text-red-500', 'px-6 py-4 text-sm whitespace-nowrap'
                    )}>
                      <select key={aluno._id} name="estado" id="estado" onChange={(e) => handleSelect(e, aluno)} value={aluno.situacao} className="bg-transparent font-semibold cursor-pointer">
                        <option value="pendente">Pendente</option>
                        <option value="matriculado">Matriculado</option>
                        <option value="recusado">Recusado</option>
                      </select>
                    </td>

                    <td className="px-6 py-4 text-sm font-medium text-right">
                      <div className="flex justify-between">
                        <button
                          className="text-green-500 hover:text-green-700"
                          onClick={() => handleEdit(aluno._id)}
                        >
                          Detalhes
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => deleteAluno(aluno._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
