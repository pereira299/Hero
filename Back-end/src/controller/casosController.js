const connection = require("../database/connection");
const crypto = require("crypto");
module.exports = {
    async list(request, response) {
        const { page = 1 } = request.query;
        var [count] = await connection("casos")
            .count();

        const casos = await connection("casos")
            .join("ongs", "ongs.id", "=", "casos.ong_id")
            .limit(5)
            .offset((page - 1) * 5)
            .select(["casos.*",
                "ongs.name",
                "ongs.email",
                "ongs.whatsapp",
                "ongs.city",
                "ongs.uf"
            ]);

        response.header("X-Total-Count", count["count(*)"]);
        return response.json(casos);
    },
    async create(request, response) {
        const { title, description, value } = request.body;
        var ong_id = request.headers.authorization;
        var [id] = await connection("casos").insert({
            title, description, value, ong_id
        });
        return response.json({ id });
    },
    async remove(request, response) {
        const { id } = request.params;
        const ongs_id = request.headers.authorization;

        var casos = await connection("casos")
            .where("id", id)
            .select("ong_id")
            .first();

        if (casos.ong_id != ongs_id) {
            return response.status(401).json({ error: "Operation not permitted." });
        }

        await connection("casos")
            .where("id", id)
            .delete();

        return response.status(204).send();
    }
}