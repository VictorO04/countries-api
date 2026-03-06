import { Router } from 'express';
import * as countryController from '../controllers/countryController.js';

const router = Router();

router.get('/countries', countryController.getCountries);
router.get('/countries/:id', countryController.getCountryById);

export default router;