import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Ekballo");
  console.log(req.body)

  switch (req.method) {

    case "GET":
      try{
        const allPosts = await db.collection("matriculas").find({}).toArray();
        res.json({ status: 200, data: allPosts });
      }
      catch(error){
        res.json({status: 200, data: error})
      }
      break;

    case "POST":
      try {
        await db.collection("matriculas").insertOne(req.body)
        res.status(200).json({ result: "Sua matricula foi realizada com sucesso!" });
      } catch (err) {
        console.log(err);
        res.status(401).json({ error: err });
      }
      break;
    case "PUT":
      try{
        const att = await db.collection("matriculas").updateOne({ _id: req.body._id, situcao: req.body.situacao})
        res.status(200).json({data: "Put method done sucessfully! Document updated!"})
      }
      catch(err){
        res.status(404).json({error: err})
      }
  }
}