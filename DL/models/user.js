const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  password: {
    type: String,
    select: false,
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});
module.exports = mongoose.model("user", userSchema);

//exemple for reset credits
// let user= {
//     firstName: "yosef",
//     lastName: "sharvit",
//     creditsData: {
//         monthlyCredits: 100,
//         currentMonthBalance: 70,
//         nextMonthBalance: 70,
//         purchasedCreditBalance: 200,
//     },
// }

// function updetingCraditsEvreyMonth(user){
//     let creditsData=user.creditsData;
//     creditsData.currentMonthBalance=creditsData.nextMonthBalance;
//     creditsData.nextMonthBalance=creditsData.monthlyCredits;

// }
// console.log(...user)
// updetingCraditsEvreyMonth(user)
// console.log(user)
