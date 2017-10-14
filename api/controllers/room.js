import * as roomService from "../../feature/room";
import { PUBLISHING } from "../../model/status/roomStatus";
import { responseToResult, responseToErr } from "../helpers/request";
function createRoom(req, res) {
  const { body } = req;
  roomService
    .createRoom(body)
    .then(result => {
      responseToResult(res, result);
    })
    .catch(err => {
      responseToErr(res, err);
    });
}

function listRooms(req, res) {
  roomService
    .listRooms({ includes: [PUBLISHING] })
    .then(result => {
      responseToResult(res, result);
    })
    .catch(err => {
      responseToErr(res, err);
    });
}

function onPublishStart(req, res) {
  roomService
    .onPublishStart(req.body)
    .then(result => {
      responseToResult(res, result);
    })
    .catch(err => {
      responseToErr(res, err, 500);
    });
}

function onPublishFinish(req, res) {
  roomService
    .onPublishFinish(req.body)
    .then(result => {
      responseToResult(res, result);
    })
    .catch(err => {
      responseToErr(res, err, 500);
    });
}
export { createRoom, listRooms, onPublishFinish, onPublishStart };
