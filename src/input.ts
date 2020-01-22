import mongoose from 'mongoose';
import validator from 'validator';

const uri: string = 'mongodb://127.0.0.1:27O17/local';

mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology: true},(err:any) => {
    if(err) {
        console.log(err.message);
    }
     else {
         console.log("Succesfully connected.");
     }
})

export const inputSchema = new mongoose.Schema({
    type: {type: String},
    district: {type: String,required:[true,'Required field.']},
    propertyType: {type: String, enum: ['HOUSE','FLAT','COMMERCIAL_OBJECT','OTHER'],required:[true,'Required field.']},
    fullName: {type:String,required:true},
    email: {type:String,required:[true,'Required field.'],validate: [ validator.isEmail, 'invalid email' ]},
    phoneNumber: {
        type: String,
        validate: {
          validator: function(v: string) {
            return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/.test(v);
          },
          message: '{VALUE} is not a valid phone number!'
        },
        required: [true, 'User phone number required']
      },

});

const Model = mongoose.model('Model',inputSchema);
export default Model;
