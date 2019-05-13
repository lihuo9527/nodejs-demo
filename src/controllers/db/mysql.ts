import * as mysql from 'mysql';
import { mysqlConfig } from '../../../environments/environments';
const pool = mysql.createPool(mysqlConfig);
export default pool;