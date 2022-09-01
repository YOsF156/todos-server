// require('../db').connect()
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
async function read(filter, proj) {
  return await userModel.find(filter, proj);
}

async function readOne(filter, proj) {
  return await userModel.findOne(filter, proj);
}

async function readOneAndPopulate(filter, proj, populate) {
  return await userModel.findOne(filter, proj).populate(populate);
}

async function create(newUser) {
  return await userModel.create(newUser);
}

async function update(id, updatedUser) {
  return await userModel.findByIdAndUpdate(id, updatedUser, { new: true });
}

async function del(id) {
  return await userModel.findByIdAndUpdate(
    id,
    { isActive: false },
    { new: true }
  );
}
module.exports = {
  read,
  readOne,
  readOneAndPopulate,
  create,
  update,
  delete: del,
};

const logTheLastMonthCredits = (usersData) => {
  //
};

function updetingCraditsEvreyMonth(creditsData) {
  creditsData.currentMonthBalance = creditsData.nextMonthBalance;
  creditsData.nextMonthBalance = creditsData.monthlyCredits;
  return creditsData;
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const startUpdateCredit = async () => {
  await require("../db").connect();
  let users = await read();
  logTheLastMonthCredits({ ...users });
  let change = await users
    .filter((user) => user.isSubscribed)
    .map((user) => {
      update(
        { _id: user._id },
        { creditsData: updetingCraditsEvreyMonth(user.creditsData) }
      );
    });
  console.log(change);
};

var CronJob = require("cron").CronJob;
var job = new CronJob(
  "00 00 01 * *",
  function () {
    startUpdateCredit();
    console.log("You will see this message every time its run");
  },
  null,
  true
);
job.start();


let user = {
  firstName: "yosi",
  lastName: "shar",
  password: "123456",
  email: "yosistar@gmail.com",

}
async function doIt(body) {
  try {

    let hash = await bcrypt.hash(body.password, 10)
    let newOne = await create({ ...body, password: hash })
    console.log("🚀  ~ file: userController.js ~ line 91 ~ doIt ~ newOne", newOne)
  } catch (e) {
    if (e.code === 11000 && e.keyValue) {
      console.log(`שדה ${Object.keys(e.keyValue)}  הנשלח כבר תפוס במערכת`)
    }
  }
}

// doIt(user)
const delit = async (email) => {
  const user = await readOne({ email: email })
  console.log("🚀 ~ file: userController.js ~ line 104 ~ delit ~ user", user)
  const del = await userModel.findByIdAndDelete(
    { _id: user._id },

  )
  console.log("🚀 ~ file: userController.js ~ line 101 ~ delit ~ del", del)
}

// delit('yosistar@gmail.commm,m,m,') 