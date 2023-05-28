const db = require("../database/models");

module.exports = {
    getAllUsers : async () => {
        try {
            const users = await db.Users.findAll();

            return users
        } catch (error) {
            console.log(error);
            throw {
                status: 500,
                message: error.message
            }
        }
    },
    getOneUser : async (id) => {
        try {
            const users = await db.Users.findByPk(id,{
                attributes: {
                    exclude: ["id","pass", "rolId"]
                }
            });
            return users
        } catch (error) {
            console.log(error);
            throw {
                status: 500,
                message: error.message
            }
        }
    }
}