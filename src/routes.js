import { Router } from 'express';
import cors from 'cors';
import BrandController from './app/controllers/BrandController';
import ProductController from './app/controllers/ProductController';

const routes = Router();
routes.use(cors());

routes.get('/', (req, res) => res.json({ result: 'TEST-API' }));

// ROUTES PARA BRANDS
routes.post('/brands', BrandController.store);
routes.get('/brands/:uid', BrandController.show);
routes.get('/brands', BrandController.index);
routes.delete('/brands/:uid', BrandController.delete);
routes.put('/brands/:uid', BrandController.update);

// ROUTES PARA PRODUCTS
routes.post('/products', ProductController.store);
routes.get('/products/:uid', ProductController.show);
routes.get('/products', ProductController.index);
routes.put('/products/:uid', ProductController.update);
routes.delete('/products/:uid', ProductController.delete);

export default routes;
