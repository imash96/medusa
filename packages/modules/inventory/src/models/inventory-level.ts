import { model } from "@medusajs/framework/utils"
import InventoryItem from "./inventory-item"

const InventoryLevel = model
  .define("InventoryLevel", {
    id: model.id({ prefix: "ilev" }).primaryKey(),
    location_id: model.text(),
    stocked_quantity: model.bigNumber().default(0),
    reserved_quantity: model.bigNumber().default(0),
    incoming_quantity: model.bigNumber().default(0),
    // available_quantity: model.bigNumber().nullable(), // readonly
    metadata: model.json().nullable(),
    inventory_item: model.belongsTo(() => InventoryItem, {
      mappedBy: "location_levels",
    }),
  })
  .indexes([
    {
      name: "IDX_inventory_level_inventory_item_id",
      on: ["inventory_item_id"],
    },
    {
      name: "IDX_inventory_level_location_id",
      on: ["location_id"],
    },
    {
      name: "IDX_inventory_level_location_id_inventory_item_id",
      on: ["inventory_item_id", "location_id"],
      unique: true,
    },
  ])

export default InventoryLevel
