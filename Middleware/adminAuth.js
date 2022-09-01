// const userLogic = require("../BL/userLogic");


// const adminAuth = async (req, res, next) => {

//     try {
//         const isAdmin = await userLogic.isAdmin(req._id);
//         if (isAdmin) {
//             next()
//         } else {
//             throw ({ code: 401, message: "access denied" })
//         }

//     } catch (error) {
//         res.status(error.code).send(error.message);

//     }
// }

// module.exports = { adminAuth }