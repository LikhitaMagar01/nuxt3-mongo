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

export const MemberModel = model<IUser>("members", userSchema);

export default defineEventHandler(async (event) => {
  const createMember = async (user: IUser) => {
    try {
      const response = await MemberModel.create(user);
      console.log("user created", response);
    } catch (error) {
      console.error("error", error);
    }
  };
});
