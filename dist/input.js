"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const uri = 'mongodb://127.0.0.1.27O17/local';
mongoose_1.default.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Succesfully connected.");
    }
});
exports.inputSchema = new mongoose_1.default.Schema({
    type: { type: String, required: true },
    district: { type: String, required: true },
    propertyType: { type: String, required: true, enum: ['HOUSE', 'FLAT', 'COMMERCIAL_OBJECT', 'OTHER'] },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true }
});
const Model = mongoose_1.default.model('Model', exports.inputSchema);
exports.default = Model;
