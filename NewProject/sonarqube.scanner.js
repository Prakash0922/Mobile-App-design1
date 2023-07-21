const scanner = require("sonarqube-scanner");

scanner(

  {

    serverUrl: "http://localhost:9000",

    login: "admin",

    password: "admin123",

    token:"sqa_ac76080b551f83aee3930200297f4d0364f68d90",

    options: {

      "sonar.sources": "./src",

    },

  },

  () => process.exit()

);
