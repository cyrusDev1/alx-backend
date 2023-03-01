const redis = require('redis');
const client = redis.createClient();
client.on('connect', () => {
  redis.print('Redis connected to the server');
});

client.on('error', (error, _) => {
  redis.print(`Redis not connected to the server: ${error}`);
});

client.subscribe('holberton school channel', (err, count) => {
  if (err) {
    console.log(err);
  }
});

client.on('message', (channel, message) => {
  if (message === 'KILL_SERVER') {
    client.unsubscribe();
    client.quit();
  }
  console.log(message);
});
