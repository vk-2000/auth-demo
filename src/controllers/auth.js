const authService = require('../services/auth');

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const token = await authService.loginUser(username, password);
        res.status(200).json({ token });
    } catch (err) {
        return res.status(401).json({ message: err.message });
    }
};

const verifyToken = async (req, res) => {
    const { token } = req.body;
    try {
        const decoded = await authService.verifyToken(token);
        res.status(200).json({ ...decoded, valid: true });
    } catch (err) {
        return res.status(401).json({ valid: false, message: err.message });
    }
};

module.exports = { verifyToken, loginUser };