"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_controller_1 = require("./controllers/router.controller");
var router_controller_1_1 = require("./controllers/router.controller.1");
var express_session_1 = __importDefault(require("express-session"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var connect_redis_1 = __importDefault(require("connect-redis"));
var environments_1 = require("../environments/environments");
var redisStore = connect_redis_1.default(express_session_1.default);
var app = express_1.default();
var port = Number(process.env.PORT) || environments_1.node.port;
app.use(cookie_parser_1.default());
app.use(express_session_1.default({
    name: "sessionId",
    secret: 'keyboard cat',
    store: new redisStore(environments_1.redisConfig),
    cookie: {
        maxAge: 60000 * 60 * 4
    }
}));
app.use('/login', router_controller_1.RouterController);
app.use('/account', router_controller_1_1.accountController);
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});
