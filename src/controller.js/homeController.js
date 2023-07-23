import pool from "../../database/db";

class homeController {
    static async home(req, res, nex) {     
    res.render('home.ejs')     
    }
}

export default homeController;