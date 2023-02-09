import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Ekballo");
  console.log(req.body)
  const { id, situacao } = req.body


  switch (req.method) {

    case "GET":
      try {
        const allPosts = await db.collection("matriculas").find({}).toArray();
        res.json({ status: 200, data: allPosts });
      }
      catch (error) {
        res.json({ status: 200, data: error })
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
      try {

        // this option instructs the method to create a document if no documents match the filter
        const options = { upsert: true };

        
        const result = await db.collection("matriculas").updateOne({_id: ObjectId(id)}, { $set: {situacao: situacao}}, options);

        res.status(200).json({data: "UPDATED SUCESSFULLY!"+result})
      }
      catch (err) {
        res.status(404).json({ error: err })
      }
      break;
  }
}