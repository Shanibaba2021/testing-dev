const UserSchema = require("../Schemas/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const signup = async (req, res) => {

    const { email, password } = req.body;

    try{

        const existinguser = await UserSchema.findOne({ email });

        if(existinguser){
            return res.status(400).json({ status: false , message: "User already exists" , result: [] });
        }

        const hashpassword = await bcrypt.hash(password, 12);

        const user = await UserSchema.create({ email, password: hashpassword });

        const token = jwt.sign({ email: user.email, id: user._id }, "test");

        res.status(200).json({ status: true , result: user, token: token });

    }catch(err){
        res.status(500).json({ status: false , message: "Something went wrong"  });
    }

}

const login = async (req, res) => {

    const { email, password } = req.body;

    try{

        //find user
        const user = await UserSchema.findOne({ email });

        if(!user){
            return res.status(404).json({ message: "User doesn't exist" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect){
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ email: user.email, id: user._id }, "test");

        res.status(200).json({ result: user, token: token });

    }catch(err){
        res.status(500).json({ message: "Something went wrong" });
    }
    
}

module.exports = { signup ,login };