const { setWorldConstructor } = require("@cucumber/cucumber");

class CustomWorld {
  browser = null;
  context = null;
  page = null;
}

setWorldConstructor(CustomWorld);