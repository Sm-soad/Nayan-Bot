module.exports.config = {
  name: "imagine",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "",
  prefix: 'awto',
  category: "prefix",
  usages: "prompt",
  cooldowns: 10,
  dependencies: {
     'nayan-server': ''
  }
};





module.exports.run = async function({ api, event, args }) {

  const axios = require("axios")
  const request = require("request")
  const fs = require("fs-extra")
  const {imagine} = require('nayan-server')
   const content = args.join(" ");
if (!args[0]) return api.sendMessage(`Usage: ${global.config.PREFIX}${this.config.name} cat, 4k`, event.threadID, event.messageID)

try {
const res = await imagine(content)
console.log(res)
api.setMessageReaction("✅", event.messageID, (err) => {
    }, true);
const img1 = res.image_url
const job = res.job_id
      var msg = [];

const pic = (
  await axios.get(`https://images.prodia.xyz/${job}.png`,
    { responseType: 'stream' }
  )
).data;

      {
          msg += `✅HERE YOUR PHOTO`
      }

      return api.sendMessage({
          body: msg,
          attachment: pic

      }, event.threadID, event.messageID);
   } catch (err) {
   api.setMessageReaction("❌", event.messageID, (err) => {
  }, true);
  console.log(err)
    api.sendMessage(`Something Went Wrong🐱`, event.threadID, event.messageID);  
   }
};