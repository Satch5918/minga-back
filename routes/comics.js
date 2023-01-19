import controller from '../controllers/comics.controller.js'
import validator from '../middlewares/validator.js'
import schema from '../schemas/comic.schema.js'
import tittleExist from '../middlewares/tittleExist.js'
import controllerDetails from '../controllers/comics.id.controller.js';
const {get_comic} = controllerDetails



import all from "../controllers/comicall.controller.js"
import isAuthor from '../middlewares/isAuthor.js';
import authorIsActive from '../middlewares/authorIsActive.js';

const { read } = all


router.get('/',read) // modificar nombre metodo 

router.post('/',validator(schema),tittleExist,create);
router.get('/:id', get_comic)


export default router;