const { MongoClient, ServerApiVersion } = require('mongodb');

export default async function handler(req, res) {
  const uri = "mongodb+srv://@items.luxvvhh.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  if (req.method === 'POST') {
  try {
    const database = client.db('Ekballo');
    const tabela = database.collection('matriculas');
    const query = req.body;
    const result = await tabela.insertOne(query)
    console.log(`Criado com o ID: ${result.insertedId}`);
    res.status(200).json({msg: "Matricula realizada com Sucesso!"})
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

}
