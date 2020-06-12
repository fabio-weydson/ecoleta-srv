"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var multer_1 = __importDefault(require("multer"));
var multer_2 = __importDefault(require("../config/multer"));
var pointsController_1 = __importDefault(require("./controllers/pointsController"));
var itemsController_1 = __importDefault(require("./controllers/itemsController"));
var pointsController = new pointsController_1.default();
var itemsController = new itemsController_1.default();
var upload = multer_1.default(multer_2.default);
var routes = express_1.default.Router();
routes.get('/', function (req, res) { res.json({ mensagem: "Servidor rodando" }); });
routes.use('/uploads', express_1.default.static(path_1.default.resolve(__dirname, '..', 'uploads')));
// METODOS PADRAO
// index, show, create, update, delete/destroy
routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.post('/points', upload.single('image'), pointsController.create);
routes.get('/points/:id', pointsController.show);
exports.default = routes;
// DESIGN PATTERNS
// Service Pattern
// Repository Pattern
