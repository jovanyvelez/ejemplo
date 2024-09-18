import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const autores = sqliteTable("autores", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	nombre: text("nombre").notNull(),
	pais: text("pais").notNull(),
});