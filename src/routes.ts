import { Router, Request, Response } from "express";
import { Login } from "./controllers/AuthController";

import { CreateUser, DeleteUser, ListUsers, EditUser, GetUserById } from "./controllers/UserController";
import { CreateCurso, EditCurso, ListCursos, GetCursoById } from "./controllers/CursoController";

const router = Router()

router.get('/testando', (req: Request, res: Response) => {
    res.json({ msg: "ok" })
})


//rotas de autenticação
router.post('/login', new Login().handle)
router.post('/register')



//Rota de usuários
router.get('/list-usuarios', new ListUsers().handle)
router.get('/get-usuario/:id', new GetUserById().handle)
router.post('/cad-usuario', new CreateUser().handle)
router.delete('/delete-usuario/:id', new DeleteUser().handle)
router.put('/edit-usuario/:id', new EditUser().handle)

//rota de cursos
router.get('/list-cursos', new ListCursos().handle)
router.get('/get-curso/:id', new GetCursoById().handle)
router.post('/cad-curso', new CreateCurso().handle)
router.delete('/delete-curso/:id')
router.put('/edit-curso/:id', new EditCurso().handle)


export {router}