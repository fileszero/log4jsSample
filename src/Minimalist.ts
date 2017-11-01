
// https://github.com/log4js-node/log4js-node#usage

import * as log4js from "log4js";
const logger = log4js.getLogger();
logger.level = "debug";
logger.debug("Some debug messages");
