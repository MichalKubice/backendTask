"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const uri = 'mongodb://127.0.0.1:27O17/local';
mongoose_1.default.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Succesfully connected.");
    }
});
exports.inputSchema = new mongoose_1.default.Schema({
    type: { type: String },
    district: { type: String, required: [true, 'Required field.'] },
    propertyType: { type: String, enum: ['HOUSE', 'FLAT', 'COMMERCIAL_OBJECT', 'OTHER'], required: [true, 'Required field.'] },
    fullName: { type: String, required: true },
    email: { type: String, required: [true, 'Required field.'], validate: [validator_1.default.isEmail, 'invalid email'] },
    phoneNumber: {
        type: String,
        validate: {
            validator: function (v) {
                return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        },
        required: [true, 'User phone number required']
    },
});
const Model = mongoose_1.default.model('Model', exports.inputSchema);
exports.default = Model;
