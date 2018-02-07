# LiveTalkServer

* Demostrate how to integrate with nginx-rtmp and own your room_list for list available rtmp-streams

## Requirement

* `Docker`, `nodemon`, `npm`, `nginx-rtmp`

- Run LiveTalkServer after [nginx-rtmp](https://github.com/zhang699/nginx-rtmp) started.

  * configure `on_publish` and `on_publish_done` in nginx.conf to your server's endpoint like this:

  * `on_publish`: http://<YOUR_IP_ADDRESS>:10010/hooks/publish/start;

  * `on_publish_done`: http://<YOUR_IP_ADDRESS>:10010/hooks/publish/start/stop;

* Start LiveTalkServer

```
docker run mongo -p 27017:27017
npm start
```
