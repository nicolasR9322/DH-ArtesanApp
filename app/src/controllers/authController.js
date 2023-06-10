const db = require("../database/models")


module.exports = {
    loginGoogle: async (req,res) => {
        const {
            provider,
            photos: [{value: picture}],
            _json: {
                sub : googleId,
                given_name : name,
            },
        } = req.session.passport.user

        try {
           const [user, isCreated] = await db.Users.findOrCreate({
                where: {
                    socialId: googleId
                },
                defaults: {
                    name: name,
                    avatar:picture,
                    rolId:2,
                    socialId: googleId,
                    socialProvider: provider
                }
            });

            /* if(!isCreated){
                aca se puede destruir datos que no sirven
            } */

            req.session.user = {
                id:user.id,
                name,
                email:user.email,
                pass:user.pass,
                avatar:picture,
                recordar:user.recordar,
                rol:user.rolId,
                socialId: googleId,
                socialProvider: provider
            }


            let cookieLife = new Date(Date.now() + 60000); 
    
                    res.cookie("userArtesanApp",
                    req.session.user,
                    {
                        expires:cookieLife,
                        httpOnly: true
                    })
                    
            res.redirect("/");
        } catch (error) {
            console.log(error)
        }

    },
}
