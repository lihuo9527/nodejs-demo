"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//返回一个对象
function MysqlMatchObject(pool, sql, params) {
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
                return;
            }
            connection.query(sql, params, function (error, res) {
                connection.release();
                if (error) {
                    reject(error);
                    return;
                }
                resolve(res);
            });
        });
    });
}
exports.MysqlMatchObject = MysqlMatchObject;
;
//返回单个查询结果
function MysqlOnce(pool, sql, params) {
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
                return;
            }
            connection.query(sql, params, function (error, res) {
                connection.release();
                if (error) {
                    reject(error);
                    return;
                }
                resolve(res[0] || null);
            });
        });
    });
}
exports.MysqlOnce = MysqlOnce;
;
//执行代码，返回执行结果
function MysqlCall(pool, sql, params) {
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
                return;
            }
            connection.query(sql, params, function (error, res) {
                connection.release();
                if (error) {
                    reject(error);
                    return;
                }
                resolve(res);
            });
        });
    });
}
exports.MysqlCall = MysqlCall;
;
