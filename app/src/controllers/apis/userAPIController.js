const { getAllUsers, getOneUser } = require("../../services/userService");


module.exports = {
    list: async (req,res) => {
        try {
            const users = await getAllUsers();

            return res.status(200).json({
                ok:true,
                total: users.length,
                url : "/api/users",
                data : users
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                error : {
                    status: error.status || 500,
                    message: error.message || "ha ocurrido un error"
                }
            })
        }
    },
    getOne : async (req,res) => {
        try {
            let id = req.params.id

            const users = await getOneUser(id);
            
            return res.status(200).json({
                ok:true,
                url : "/api/users/:id",
                profile: `http://localhost:3030/images/avatar/${users.avatar}`,
                data : users
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                error : {
                    status: error.status || 500,
                    message: error.message || "ha ocurrido un error"
                }
            })
        }
    }
}