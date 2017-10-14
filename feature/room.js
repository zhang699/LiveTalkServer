import { Room } from "../model";
import { PUBLISHING, FINISH, NEW } from "../model/status/roomStatus";
import shortid from "shortid";
export async function listRooms(info) {
  const { includes = [] } = info;
  return await Room.find({ status: { $in: includes } });
}

export async function createRoom(info) {
  const room = new Room({
    name: info.name,
    streamId: shortid.generate()
  });
  return await room.save();
}
export async function onPublishStart(info) {
  console.warn("onPublishStart", info);
  const { name } = info;
  const room = await Room.findOne({ streamId: name, status: NEW });
  if (!room) {
    throw new Error("Room is not created");
  }
  room.status = PUBLISHING;

  return await room.save();
}

export async function onPublishFinish(info) {
  const { name } = info;
  const room = await Room.findOne({ publishId: name });
  room.status = FINISH;
  return await room.save();
}
