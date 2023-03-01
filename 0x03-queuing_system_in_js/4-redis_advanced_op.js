const redis = require('redis');
const client = redis.createClient();
client.on('connect', () => {
  redis.print('Redis connected to the server');
});

client.on('error', () => {
  redis.print('Redis not connected to the server');
});

function setHash (key, field, value) {
  client.hset(key, field, value, (error, result) => {
    if (error) {
      redis.print(error);
    }
    redis.print(`Reply: ${result}`);
  });
}
setHash('HolbertonSchools', 'Portland', 50);
setHash('HolbertonSchools', 'Seattle', 80);
setHash('HolbertonSchools', 'New York', 20);
setHash('HolbertonSchools', 'Bogota', 20);
setHash('HolbertonSchools', 'Cali', 40);
setHash('HolbertonSchools', 'Paris', 2);

(() => {
  client.hgetall('HolbertonSchools', (error, result) => {
    if (!error) {
      console.log(result);
    }
  });
})();
