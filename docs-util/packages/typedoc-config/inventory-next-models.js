/* eslint-disable @typescript-eslint/no-var-requires */
const modelConfig = require("./_models")

module.exports = modelConfig({
  entryPointPath: "packages/inventory-next/src/models/index.ts",
  name: "inventory-next-models",
  tsConfigName: "inventory-next.json",
})
