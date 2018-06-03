if(process.argv.length < 6) {
    throw new Error(`
        Error. You should provide required arguments to start this module.
        - Example: node index-mqtt.js $YOUR_GLADYS_MACHINE_ID $YOUR_MQTT_URL $YOUR_MQTT_USERNAME $YOUR_MQTT_PASSWORD $MODULE_SLUG
    `);
}
 
var gladysMqttAdapter = require('gladys-mqtt-adapter')({
    MACHINE_ID: process.argv[2],
    MQTT_URL: process.argv[3],
    MQTT_USERNAME: process.argv[4],
    MQTT_PASSWORD: process.argv[5],
    MODULE_SLUG: process.argv[6] 
});

// we create the notification type on the DB side if it does not exist
gladysMqttAdapter.on('connect', function(){
    gladysMqttAdapter.notification.install({service: 'speak', name: 'Speak'});
});

gladysMqttAdapter.on('message-notify', function(data){
    if(data.message) {
        say({
            text: data.message.text,
            language: data.user.language
        });
    } else if(data.notification) {
        say({
            text: data.notification.text,
            language: data.user.language
        });
    }
});
