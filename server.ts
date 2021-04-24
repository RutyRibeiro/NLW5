import { http } from "./src/http"
import "./src/websocket/client"

http.listen(3333, ()=> console.log('server is running in port 3333'));