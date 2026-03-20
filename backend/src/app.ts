import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Swapnil — uncomment when auth module is ready
// import authRoutes from './routes/auth.routes';
// app.use('/api/auth', authRoutes);

// Rishima — uncomment when listings module is ready
// import listingRoutes from './routes/listings.routes';
// app.use('/api/listings', listingRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'ShopNest API running' });
});

export default app;
