import { Router, Request, Response } from "express";

import { CreateUser, DeleteUser, ListUsers, EditUser } from "./controllers/UserController";

const router = Router()

router.get('/testando', (req: Request, res: Response) => {
    res.json({ msg: "ok" })
})

//Rota de usuários
router.get('/list-usuarios', new ListUsers().handle)
router.post('/cad-usuario', new CreateUser().handle)
router.delete('/delete-usuario/:id', new DeleteUser().handle)
router.put('/edit-usuario/:id', new EditUser().handle)

export {router}