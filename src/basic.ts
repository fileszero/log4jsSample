import { configure, getLogger } from "log4js";

// see https://github.com/log4js-node/log4js-node#typescript
// configure("./filename");
configure({
    appenders: { cheese: { type: "file", filename: "logs/cheese.log" } },   // filenameはproject root(package.jsonのあるとこ)からのパス
    categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = getLogger();
logger.level = "debug";
logger.debug("Some debug messages");

