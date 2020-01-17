const config = {
  defaultSettings: {
    prefix: "t!",
    modLogChannel: "logs",
    modRole: "Modo",
    adminRole: "Admin",
    fondaRole: "Fondateur",
    systemNotice: true
  },
  permLevels: [
    { level: 0, name: "Utilisateur", check: () => true },
    {
      level: 1,
      name: "Modo",
      check: message => {
        try {
          const modRole = message.guild.roles.find(
            r => r.name.toLowerCase() === message.settings.modRole.toLowerCase()
          );
          if (modRole && message.member.roles.has(modRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
    {
      level: 2,
      name: "Admin",
      check: message => {
        try {
          const adminRole = message.guild.roles.find(
            r =>
              r.name.toLowerCase() === message.settings.adminRole.toLowerCase()
          );
          if (adminRole && message.member.roles.has(adminRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
    {
      level: 3,
      name: "Fondateur",
      check: message => {
        try {
          const fondaRole = message.guild.roles.find(
            r =>
              r.name.toLowerCase() === message.settings.fondaRole.toLowerCase()
          );
          if (fondaRole && message.member.roles.has(fondaRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    }
  ]
};

module.exports = config;