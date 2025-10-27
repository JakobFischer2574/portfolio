import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.json('all routers'))
app.get('/:id', async (c) => {
    const res = await fetch("http://localhost:3000/api/router") // TODO: remove call to myself!
    return c.json(`get ${await res.json()} ${c.req.param('id')}`)
})

export default app