import knex from "../lib/Knex.js";
import { Model } from "objection";

// Koppel Objection.js aan Knex
Model.knex(knex);

class User extends Model {
    static get tableName() {
        return "users";
    }

    static get idColumn() {
        return "id";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["firstname", "lastname", "bio"],
            properties: {
                id: { type: "integer" },
                firstname: { type: "string", minLength: 1, maxLength: 255 },
                lastname: { type: "string", minLength: 1, maxLength: 255 },
                bio: { type: "string", minLength: 1 }
            }
        };
    }
}

export default User;
