import {Router} from 'express';

import{
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} from '../controllers/tasks.controllers.js';

const router = Router();

router.get('/tasks', getTasks);

router.get('/tasks/:id', getTask);  // put an id for specifi the task

router.post('/tasks', createTask);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTask);


export default router;