import { promisify } from 'util';
const redis = require('redis');
const client = redis.createClient();
const asyncClient = promisify(client.get).bind(client);
client.on('connect', () => {
  redis.print('Redis connected to the server');
});

client.on('error', () => {
  redis.print('Redis not connected to the server');
});

function setNewSchool (schoolName, value) {
  client.set(schoolName, value, (error, result) => {
    if (error) {
      redis.print(error);
    }
    redis.print(`Reply: ${result}`);
  });
}

async function displaySchoolValue (schoolName) {
  const reply = await asyncClient(schoolName);
  redis.print(reply);
}

(async () => {
  await displaySchoolValue('Holberton');
  setNewSchool('HolbertonSanFrancisco', '100');
  await displaySchoolValue('HolbertonSanFrancisco');
})();
