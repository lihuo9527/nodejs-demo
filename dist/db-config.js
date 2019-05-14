"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    Object.defineProperty(User, "table", {
        get: function () {
            return 'USER';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User, "column", {
        get: function () {
            return {
                userId: 'user_id',
                userName: 'user_name',
                userPassword: 'user_password',
            };
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
