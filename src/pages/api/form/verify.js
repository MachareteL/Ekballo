import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Ekballo");
  const mail = (req.body).replaceAll('"', '')


  try {
    const matriculado = await db.collection("matriculas").find({ email: mail }).toArray()
    res.status(200).json({ result: "Usuario existente!", data: matriculado });
  } catch (err) {
    res.status(401).json({ error: err });
  }



}