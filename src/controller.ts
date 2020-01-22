import { Request, Response, response } from 'express';
import Model from './input';

export let importData = (req:Request,res:Response) => {
    let data = new Model(req.body);
    data.save().then(item => {
        res.json({
            message: "Succes!",
            object: item
        });
    }).catch(err => {
        res.status(400).json({
            message: "Failed",
            error: err.message
        });
    })

}