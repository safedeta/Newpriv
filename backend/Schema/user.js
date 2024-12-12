const Mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const router = require('express').Router();

const UserSchema = new Mongoose.Schema({
    id: { type: Object },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
});

UserSchema.pre("save", function(next){
    if(this.isModified('password') || this.isNew){
        const document = this;
        bcrypt.hash(document.password, 10, (err, hash) => {
            if(err){
                console.error('Error hashing password:', err);
                next(err);
            }else{
                console.log('Password hashed successfully');
                document.password = hash;
                next();
            }
        });
    }else{
        next();
    }
});

UserSchema.methods.usernameExist = async function (username) {
    const result = await Mongoose.model('User').findOne({ username });
    return !!result;
};


UserSchema.methods.comparePassword = async function(password, callback){
    const same = await bcrypt.compare(password, hash);
    return same;
}

module.exports = Mongoose.model('User', UserSchema);