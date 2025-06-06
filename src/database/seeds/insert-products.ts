import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("products").del();

  await knex("products").insert([
    { name: "Feijoada", price: 35.9 },
    { name: "Moqueca de peixe", price: 42.5 },
    { name: "Churrasco gaúcho", price: 55.0 },
    { name: "Picanha na brasa", price: 68.9 },
    { name: "Bacalhau à portuguesa", price: 79.9 },
    { name: "Strogonoff de frango", price: 29.9 },
    { name: "Risoto de camarão", price: 48.0 },
    { name: "Escondidinho de carne seca", price: 37.5 },
    { name: "Filé à parmegiana", price: 45.9 },
    { name: "Sushi (combo variado)", price: 65.0 },
  ]);
}
