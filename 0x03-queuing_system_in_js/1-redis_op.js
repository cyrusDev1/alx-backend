const redis = require('redis');
const client = redis.createClient();

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

function displaySchoolValue (schoolName) {
  client.get(schoolName, (error, result) => {
    if (error) {
      redis.print(error);
    }
    redis.print(result);
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
