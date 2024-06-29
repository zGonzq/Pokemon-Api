import express from 'express';

import PokemonServiceRoutes from './routes/pokemonServicesRoutes';
import CategoriesServicesRoutes from './routes/categoriesServicesRoutes'
import eggGroutServicesRoutes from './routes/eggGroupServicesRoutes'
import abilitiesServicesRoutes from './routes/abilitiesServicesRoutes'
import movesServicesRoutes from './routes/movesServicesRoutes'
import pokeAbilityServicesRoutes from './routes/pokeAbilityServicesRoutes'
import typeServicesRoutes from './routes/typeServicesRoutes'

const app = express();
app.use(express.json());

app.use('/api', PokemonServiceRoutes);
app.use('/api', CategoriesServicesRoutes);
app.use('/api', eggGroutServicesRoutes);
app.use('/api', abilitiesServicesRoutes);
app.use('/api', movesServicesRoutes);
app.use('/api', pokeAbilityServicesRoutes);
app.use('/api', typeServicesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Servidor Web Iniciado en http://localhost:' + PORT);
})