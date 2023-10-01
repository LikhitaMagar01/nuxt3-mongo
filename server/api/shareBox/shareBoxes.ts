import { Schema, model, Document, Types } from "mongoose";
import IUser from "~/server/api/users/index.post";

interface ISharebox extends Document {
  name: string;
  description?: string;
  createdBy: Types.ObjectId | typeof IUser;
}

const shareboxSchema = new Schema<ISharebox>({
  name: { type: String, required: true },
  description: { type: String },
  createdBy: { type: Types.ObjectId, ref: "User", required: true },
});

export default model<ISharebox>("Sharebox", shareboxSchema);
