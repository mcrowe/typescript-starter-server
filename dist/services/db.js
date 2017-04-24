"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pgp = require("pg-promise");
const config_1 = require("./config");
exports.default = pgp()(config_1.default.DATABASE_URL);
//# sourceMappingURL=db.js.map