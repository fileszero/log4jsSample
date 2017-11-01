import * as log4js from "log4js";

// see https://github.com/log4js-node/log4js-node#typescript
// configure("./filename");
log4js.configure({
    appenders: {
        cheese: { type: "file", filename: "logs/ConsoleAndFile.log" },     // filenameはproject root(package.jsonのあるとこ)からのパス
        console: { type: "console" }                                       // コンソールに出力

    },
    categories: {
        default: { appenders: ["cheese", "console"], level: "all" }     // defaultはとにかく出力する設定にする
    }
});
const logger = log4js.getLogger();
logger.level = "debug"; // don't show trace message

logger.fatal("Some system messages");
logger.error("Some error messages");
logger.warn("Some warn messages");
logger.info("Some info messages");
logger.debug("Some debug messages");
logger.trace("Some trace messages");


