"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const input_1 = __importDefault(require("./input"));
exports.importData = (req, res) => {
    let data = new input_1.default(req.body);
    data.save().then(item => {
        res.json({
            message: "Succes!",
            object: item
        });
    }).catch(err => {
        res.status(400).json({
            message: "Failed",
            error: err.message
        });
    });
};
