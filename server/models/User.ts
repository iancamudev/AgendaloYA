import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    verified: { type: Boolean, default: false },
    role: {
      type: String,
      required: true,
      lowercase: true,
      enum: {
        values: ["admin", "seller", "client"],
        message: "{VALUE} no es un rol",
      },
    },
    phone: Number,
    enabled: { type: Boolean, default: true },
  },
  {
    versionKey: false,
  }
);

export default model("User", UserSchema);
