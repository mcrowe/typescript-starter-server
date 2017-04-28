"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const sql_builder_1 = require("@mcrowe/sql-builder");
const safe_async_express_errors_1 = require("@mcrowe/safe-async-express-errors");
const db_1 = require("./db");
const router = express.Router();
router.get('/', (_req, res) => {
    res.render('home', {});
});
router.get('/things', safe_async_express_errors_1.default((_req, res) => __awaiter(this, void 0, void 0, function* () {
    const things = yield db_1.default.many(sql_builder_1.default.all('things'));
    res.status(200).json({ error: null, data: things });
})));
router.get('/things/:id', safe_async_express_errors_1.default((req, res) => __awaiter(this, void 0, void 0, function* () {
    const id = req.params.id;
    const thing = yield db_1.default.oneOrNone(sql_builder_1.default.find('things', id));
    if (thing) {
        res.status(200).json({ error: null, data: thing });
    }
    else {
        res.status(404).json({ error: 'Not Found', data: null });
    }
})));
router.get('/syncerror', (_req, _res) => {
    throw new Error('Sync Error');
});
router.get('/asyncerror', safe_async_express_errors_1.default((_req, _res) => __awaiter(this, void 0, void 0, function* () {
    yield db_1.default.many(sql_builder_1.default.all('things'));
    throw new Error('Async Error');
})));
exports.default = router;
//# sourceMappingURL=router.js.map