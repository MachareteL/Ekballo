import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("Ekballo");
    const { id } = req.query

    switch (req.method) {
        case "GET":
            try {
                const achado = await db.collection("matriculas").findOne(ObjectId(id));
                res.status(200).json({ resultado: achado })
            } catch (error) {
                res.end(error)
            }
            break;

        case "DELETE":
            try {
                const achado = await db.collection("matriculas").findOne(ObjectId(id));

                await db.collection("matriculas").deleteOne(achado);

                res.status(200).json({ resultado: 'Matricula deletada com sucesso!' });
            } catch (err) {
                res.status(401).json({ resultado: err });
            }
            break;
    }
}       