import Fastify, { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { BodyOptions } from './types';

const app: FastifyInstance = Fastify({logger: true});
const prisma = new PrismaClient();

app.post('/api/level', async (req, res) => {
    const body: BodyOptions = req.body as BodyOptions;
    const r = await prisma.levels.findFirst({where: {username: body.username}});
    return r;
});

const start = async () => {
    await app.listen({port: 3000});
}

start();