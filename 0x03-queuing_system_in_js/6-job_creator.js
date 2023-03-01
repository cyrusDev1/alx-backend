const kue = require('kue');
const queue = kue.createQueue();

const job = queue.create('push_notification_code', {
  phoneNumber: '+22964466211',
  message: 'It is my phone number'
}).save((err) => {
  if (!err) console.log(`Notification job completed: ${job.id} `);
});

job.on('failed', (errorMessage) => {
  console.log('Notification job failed');
});

job.on('complete', (result) => {
  console.log('Notification job completed');
});
