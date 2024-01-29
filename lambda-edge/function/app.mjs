import { Hono } from 'hono'
import { handle } from 'hono/lambda-edge'

const app = new Hono()

app.get('/edge', async (c) => {
  return c.text('Hello Hono on Lambda@Edge!');
  });

export const lambdaHandler = handle(app);

