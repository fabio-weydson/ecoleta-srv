import {Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController {
 async index (req,res) {
    const items = await knex('items').select('*')
    const serializedItems = items.map(item => {
        return {
            id:item.id,
            title: item.title,
            image_url: `http://192.168.0.105:3333/uploads/${item.image}`,
        }
    });
    return res.json(serializedItems);
}
}
export default ItemsController;