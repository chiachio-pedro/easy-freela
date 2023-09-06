import knex from "knex";
import config from "../../../knexfile";

const db = knex(config);

async function findUserByEmail(email: string) {
  try {
    const user = await db("users").where("email", email).first();
    return user;
  } catch (error) {}
}

async function createUser(
  name: string,
  email: string,
  password: string,
  account_type: string
) {
  try {
    const user = await db("users").insert({
      name,
      email,
      password,
      account_type,
    });
    return user;
  } catch (error) {
    console.error(error);
  }
}

export default { createUser, findUserByEmail };
