import axios from "axios";
import { RootPath, OnlineRoot } from "../services/Config";
const Get = (path, root = false)  => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${root ? OnlineRoot : RootPath}/${path}`)
        .then(res => {
            resolve(res.data)
        }, (err) => {
            reject(err)
        });
    })
    return promise
}

export default Get;