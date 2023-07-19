import UserManager from "../dao/mongo/Managers/userManager.js";//Aqui elijo la persistencia a usar
import UsersService from "./user.service.js";

export const userService = new UsersService(new UserManager());

import ProductsManager from '../dao/managers/productsManager.js'
import ProductsServices from '../services/productsService.js'

export const productsService= new ProductsServices(new ProductsManager)

import CartsManager from '../dao/managers/cartManager.js'
import CartsService from './cartService.js'

export const cartsService= new CartsService(new CartsManager)

import TiketManager from '../dao/managers/tiketManager.js'
import TiketServices from '../services/tikets.service.js'

export const tiketService= new TiketServices(new TiketManager)