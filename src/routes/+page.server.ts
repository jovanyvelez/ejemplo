import {db} from '$lib/server/database/client';
import {autores} from '$lib/server/database/data';

export async function load({}) {
  
    const escritores = await db.select().from(autores);

    console.log(escritores);

    return {
        escritores
    }
}