import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    verified: Boolean,
    role: {
        type: String,
        required: true,
        lowercase: true,
        enum: {
            values: ['admin', 'seller', 'client'],
            message: '{VALUE} no es un rol'
        }
    },
    phone: Number,
    enabled: Boolean
}, {
    versionKey: false,
})

export default model('User', UserSchema)