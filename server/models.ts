import { Schema, model, Document, Types } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  shareboxes: Types.ObjectId[];
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  shareboxes: [{ type: Types.ObjectId, ref: "Sharebox" }],
});


export const MemberModel = model<any>('User', userSchema);

export default MemberModel