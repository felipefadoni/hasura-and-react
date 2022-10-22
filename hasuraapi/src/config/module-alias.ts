import { addAlias } from 'module-alias';
import { resolve } from 'path';

addAlias('@', resolve(process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'localhost' ? 'src' : 'dist'));
