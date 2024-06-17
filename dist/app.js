"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pokemonServicesRoutes_1 = __importDefault(require("./routes/pokemonServicesRoutes"));
const categoriesServicesRoutes_1 = __importDefault(require("./routes/categoriesServicesRoutes"));
const eggGroupServicesRoutes_1 = __importDefault(require("./routes/eggGroupServicesRoutes"));
const abilitiesServicesRoutes_1 = __importDefault(require("./routes/abilitiesServicesRoutes"));
const movesServicesRoutes_1 = __importDefault(require("./routes/movesServicesRoutes"));
const pokeAbilityServicesRoutes_1 = __importDefault(require("./routes/pokeAbilityServicesRoutes"));
const typeServicesRoutes_1 = __importDefault(require("./routes/typeServicesRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', pokemonServicesRoutes_1.default);
app.use('/api', categoriesServicesRoutes_1.default);
app.use('/api', eggGroupServicesRoutes_1.default);
app.use('/api', abilitiesServicesRoutes_1.default);
app.use('/api', movesServicesRoutes_1.default);
app.use('/api', pokeAbilityServicesRoutes_1.default);
app.use('/api', typeServicesRoutes_1.default);
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Servidor Web Iniciado en http://localhost:' + PORT);
});
