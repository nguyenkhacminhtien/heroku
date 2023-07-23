import pool from "../../database/db";

class homeController {
    static async home(req, res, nex) {     
    res.send('Hello World!')      
    }
}

export default homeController;