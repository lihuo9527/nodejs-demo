function CallBack() {
    this.call = function(con, res, params) {
        var sql = "SELECT * FROM config where name=" + "'" + params.name + "'" + " AND password=" + "'" + params.password + "'";
        con.query(sql, function(err, results, fields) {
            if (err) {
                console.log('[SELECT ERROR] - ', err.message);
                return;
            }
            if (results) {
                res.end(JSON.stringify(results))
                console.log(results)
                return;
            }
            console.log('------------------------------------------------------------\n\n');
        });
    };
};
module.exports = CallBack;