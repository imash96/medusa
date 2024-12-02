import { model } from "@medusajs/framework/utils"

export const User = model
  .define("user", {
    id: model.id({ prefix: "user" }).primaryKey(),
    first_name: model.text().searchable().nullable(),
    last_name: model.text().searchable().nullable(),
    email: model.text().searchable().searchable(),
    avatar_url: model.text().nullable(),
    metadata: model.json().nullable(),
  })
  .indexes([
    {
      name: "IDX_user_email",
      unique: true,
      on: ["email"],
      where: "deleted_at IS NULL",
    },
  ])
