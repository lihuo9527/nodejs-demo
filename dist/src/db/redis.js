"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environments_1 = require("../../environments/environments");
var bluebird = require('bluebird');
var redis = require('redis');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
var redisClient = redis.createClient(environments_1.redisConfig.port, environments_1.redisConfig.host);
exports.default = redisClient;
