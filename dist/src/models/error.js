"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["UNKNOWN"] = 9999] = "UNKNOWN";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
var Exception = /** @class */ (function () {
    function Exception(code, message) {
        this.code = code;
        this.message = message;
    }
    return Exception;
}());
exports.Exception = Exception;
