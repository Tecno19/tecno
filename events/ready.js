module.exports = (client) => {
  console.log(
    `Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`
  );

  const activities = [`Giveaways in ${client.guilds.cache.size} guilds`,"g!help",`over ${client.users.cache.size} users!`];
  setInterval(() => {
    let activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity("~help", { type: "The official bot of  ⚡・ Thunder || https://discord.gg/E8GBVyqPfX" });
  }, 20000);

};
