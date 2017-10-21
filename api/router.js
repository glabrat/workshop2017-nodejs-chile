import express from 'express';
import colors from 'colors/safe';


import {
    trackController,
    bandController
} from './controllers';


export const router = express.Router();



// API Routes
router.get('/tracks', trackController.getList);
router.get('/bands', bandController.getList);
router.get('/band/:id', bandController.getArtists);
