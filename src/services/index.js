import UserManager from "../dao/mongo/Managers/userManager.js";//Aqui elijo la persistencia a usar
import UsersService from "./users.service.js";

export const userService = new UsersService(new UserManager());