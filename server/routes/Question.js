import express from 'express'
import { getAllQuestions} from '../controllers/Questions.js'
import { AskQuestion , deleteQuestion , voteQuestion } from '../controllers/Questions.js' 
import auth from '../middleware/auth.js'

const router = express.Router()

router.post('/Ask', auth, AskQuestion)
router.get('/get', getAllQuestions)
router.delete('/delete/:id', auth,  deleteQuestion );
router.patch('/vote/:id', auth, voteQuestion);

export default router