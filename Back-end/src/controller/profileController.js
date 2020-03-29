const connection = require("../database/connection");
module.exports = {
    async list(request, response){
        const ongs_id = request.headers.authorization;
        const casos = await connection("casos")
        .where("ong_id", ongs_id)
        .select("*");

        return response.json(casos);
    }
}