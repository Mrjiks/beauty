/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ucccews5tbt7jz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eif9uyxr",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "t969lil5emja9et",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ucccews5tbt7jz")

  // remove
  collection.schema.removeField("eif9uyxr")

  return dao.saveCollection(collection)
})
