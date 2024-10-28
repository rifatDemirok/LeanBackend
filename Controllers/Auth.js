import AuthSchema from "../Models/Auth.js";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { userName, password, email } = req.body;

    const user = await AuthSchema.findone(email);

    if (user) {
      res.status(400).json({ msg: "User already exists" });
    }

    if (password.length < 6) {
      res.status(400).json({ msg: "Password must be atleast 6 characters" });
    }
    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = await new AuthSchema({
      userName,
      password: passwordHash,
      email,
    });

    const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.status(201).json({
      status: "success",
      token,
      newUser,
    });
  } catch (error) {
    res.status(400).json({ msg: "Error in registering user" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AuthSchema.findOne(email);
    if (!user) {
      return res
        .status(401)
        .json({ msg: "Login failed! Check authentication credentials" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res
        .status(401)
        .json({ msg: "Login failed! Check authentication credentials" });
    }

    const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.status(201).json({
      status: "success",
      token,
      user,
    });

    res.send({ user, token });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { register, login };
