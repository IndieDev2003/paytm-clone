const User = require('../user.Schema')
const zod = require('zod')
const signupSchema = zod.object({
    name: zod.string(),
    email: zod.string(),
    password: zod.string()
})
module.exports.register = async(req,res) =>
{
    
    console.log(req.body)
    const {success} = signupSchema.safeParse(req.body)
    if(!success)
    {
        return res.json({
            msg: 'Email already taken / Incorrect Inputs'
        })
    }

    const user = await User.findOne({email : req.body.email })
    if(user)
    {
        return res.json({
            msg: "User with given email already exists"
        })
    }

    const createdUser = await User.create({name: req.body.name, email : req.body.email, password :  req.body.password})
    if(!createdUser)
        return res.json({msg: 'User creation failes'})

    return res.json({msg: 'User created successfully!',
        createdUser
    })

}



// module.exports.login