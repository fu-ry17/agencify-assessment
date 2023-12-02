import request from 'supertest';
import app from '../src/index'; // Adjust the path accordingly

describe('API Endpoints', () => {
  it('GET /api/health-check', async () => {
    const response = await request(app).get('/api/health-check')
    expect(response.status).toBe(200)
    expect(response.body.msg).toEqual('Hello health check route')
  })

  it('GET /api/customers', async () => {
    const response = await request(app).get('/api/customers')
    // status
    expect(response.status).toBe(200)
    // customers to be an array
    expect(response.body.customers).toBeInstanceOf(Array)
  })
})