var cron = require("node-cron");

cron.schedule("15 15 * * *", () => {
  console.log("running a task every day");
  TncUserController.sendEmailUser();
});
