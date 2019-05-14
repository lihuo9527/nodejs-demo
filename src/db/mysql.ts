import * as mysql from 'mysql';
import { mysqlConfig } from '../../environments/environments';
const pool = mysql.createPool(mysqlConfig);

export function match(sql: string, params?: any) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
                return;
            }
            connection.query(sql, params, (error, res) => {
                connection.release();
                if (error) {
                    reject(error);
                    return;
                }
                resolve(res);
            });
        });
    });
};

//返回单个查询结果
export function once(sql: string, params?: any) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
                return;
            }
            connection.query(sql, params, (error, res) => {
                connection.release();
                if (error) {
                    reject(error);
                    return;
                }
                resolve(res[0] || null);
            });
        });
    });
};

//执行代码，返回执行结果
export function call(sql: string, params?: any) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
                return;
            }
            connection.query(sql, params, (error, res) => {
                connection.release();
                if (error) {
                    reject(error);
                    return;
                }
                resolve(res);
            });
        });
    });
};