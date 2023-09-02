/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t969lil5emja9et")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qay8g371",
    "name": "brushes",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "6ucccews5tbt7jz",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t969lil5emja9et")

  // remove
  collection.schema.removeField("qay8g371")

  return dao.saveCollection(collection)
})
