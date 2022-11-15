import app from './app';
import { PORT } from './constants/pokeapi.constants';

const port = PORT;
app.listen(port, () => console.log(`listening on port ${port}!`));
