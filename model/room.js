import mongoose, { Schema } from "mongoose";
import { STATUS_ENUM, NEW } from "./status/roomStatus";

const RoomSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  streamId: {
    type: String
  },
  status: {
    type: String,
    enum: STATUS_ENUM,
    default: NEW
  }
});

export const Room = mongoose.model("Room", RoomSchema);
