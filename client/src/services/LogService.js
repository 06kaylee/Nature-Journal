import axios from "axios";

export default {
    async getLogs() {
        let res = await axios.get("http://localhost:3000/logs");
        return res.data;
    },
    async getLog(logId) {
        let res = await axios.get("http://localhost:3000/logs/" + logId);
        return res.data;
    }
}