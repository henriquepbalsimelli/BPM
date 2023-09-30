import Knex from "knex";
import config from "./database.config";

const db = Knex(config);

export default db;