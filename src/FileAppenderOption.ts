import * as log4js from "log4js";

// see https://github.com/log4js-node/log4js-node#typescript
// configure("./filename");
log4js.configure({
    appenders: {
        cheese: {
            type: "file",
            filename: "logs/FileAppenderOption.log",
            maxLogSize: 1024 * 3, // 3Kbytes
            backups: 3,
            compress: true
        },     // filenameはproject root(package.jsonのあるとこ)からのパス
    },
    categories: {
        default: { appenders: ["cheese"], level: "all" }     // defaultはとにかく出力する設定にする
    }
});
const logger = log4js.getLogger();
logger.level = "debug"; // don't show trace message

for (let i = 0; i < 1024; i++) {    // 大量にログ書き出し
    logger.fatal("Some system messages " + i);
    logger.error("Some error messages " + i);
    logger.warn("Some warn messages " + i);
    logger.info("Some info messages " + i);
    logger.debug("Some debug messages " + i);
    logger.trace("Some trace messages " + i);
}

