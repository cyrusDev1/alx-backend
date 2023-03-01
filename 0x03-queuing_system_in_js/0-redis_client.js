const redis = require('redis');
const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis connected to the server');
});

client.on('error', () => {
  console.log('Redis not connected to the server');
});
