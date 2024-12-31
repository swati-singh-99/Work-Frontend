const { execute } = require("../wrapper/wrapper");
const { sign, verify } = require("jsonwebtoken");

module.exports.signup = async (req, res) => {
  try {
    console.log("Received request body:", req.body);

    const { name, email, password, phone } = req.body;
    console.log("Destructured data:", { name, email, password, phone });

    const [existingUser] = await execute(
      "SELECT * FROM userdata WHERE email = ?",
      [email]
    );
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const result = await execute(
      "INSERT INTO userdata (name, email, password, phone) VALUES (?, ?, ?, ?)",
      [name, email, password, phone]
    );

    res
      .status(201)
      .json({ message: "User created successfully!", userId: result.insertId });
  } catch (err) {
    console.log("Error in signup:", err);
    res.status(500).json({ message: "Server error!" });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required!" });
    }
    console.log(email);
    const [user] = await execute("SELECT * FROM userdata WHERE email = ?", [
      email,
    ]);
    if (!user) return res.status(404).json({ message: "User not found!" });
    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid Password!" });
    }

    // Generate a new access token
    const accessToken = sign({ email: user.email }, process.env.JWT_KEY);

    
    res.cookie("Token", accessToken, {
      httpOnly: true, 
      secure: process.env.NODE_ENV === "production", 
    });

    console.log("Generated Token:", accessToken);

    // Verify the token
    try {
      const validToken = verify(accessToken, process.env.JWT_KEY);
      if (validToken) {
        return res.status(200).json({ message: "Login successful!", user });
      }
    } catch (err) {
      return res.status(401).json({ message: "Invalid or expired token!" });
    }
  } catch (err) {
    console.error("Error in login:", err);
    res.status(500).json({ message: "Server error!" });
  }
};
