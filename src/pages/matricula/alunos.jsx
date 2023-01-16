import { Table } from "antd";



export default function alunos({ cadastros }) {
    var dados = []
    cadastros.map(({nome, _id})=> dados.push({key:_id, name:nome}))
      const columns = [
        {
          title: 'Aluno',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Idade',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Endereço',
          dataIndex: 'address',
          key: 'address',
        },
      ];
    // console.log(cadastros)
    
    return ( 
        <>
        <Table className="bg-red-300" dataSource={dados} columns={columns} />
        </>
     );
}

export async function getServerSideProps(){

    const retorno = await fetch('http://localhost:3000/api/form')
    const data = await retorno.json()
    const cadastros = data.data
    return{
        props:{ cadastros }
    }
}