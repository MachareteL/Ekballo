// import clientPromise from "../../lib/mongodb";

// export default async function handler(req, res) {
//   const client = await clientPromise;

//   console.log(req.body)
//   const database = client.db('Ekballo');

//   switch (req.method) { 

//     case 'GET':
//       try {
//         const tabela = database.collection('matriculas');
//         console.log('Retornando dados from MongoDB')
//         const result = await tabela.find({}).toArray();
//         res.status(200).json({ data: result })

//       } catch (err) {
//         console.log(err)
//         res.status(401).json({ erro: err })
//       } 
//       break;

//     case 'POST':
//       try {
//         const tabela = database.collection('matriculas');
//         const query = req.body;
//         const result = await tabela.insertOne(query)
//         console.log(`Criado com o ID: ${result.insertedId}`);
//         res.status(200).json({ msg: "Matricula realizada com Sucesso!" })
//       } catch (e) {
//         res.status(500).json({ error: e })
//       }


//       break;
//   }
// }

import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Ekballo");
  console.log(req.body)
  

  switch (req.method) {
    
    case "GET":
      const allPosts = await db.collection("matriculas").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;

    case "POST":
      try {
        await db.collection("matriculas").insertOne(req.body)
        res.status(200).json({ result: "Matricula realizada com sucesso!"});
      } catch(err){
        console.log(err);
        res.status(401).json({ error: err });
      }



  }
}