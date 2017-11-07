import * as log4js from "log4js";
import * as config from "config";

// see https://github.com/log4js-node/log4js-node#typescript

log4js.configure(config.get("log4js.configure"));
const logger = log4js.getLogger();
logger.level = "debug"; // don't show trace message

logger.fatal("Some system messages");
logger.error("Some error messages");
logger.warn("Some warn messages");
logger.info("Some info messages");
logger.debug("Some debug messages");
logger.trace("Some trace messages");
