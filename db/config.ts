import { column, defineDb, defineTable } from "astro:db";

const Registrars = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text({ optional: false }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Registrars,
  },
});
