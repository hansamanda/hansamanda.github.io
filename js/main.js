var webPush = require('web-push');
var pushSubscription = {
    "endpoint": "https://android.googleapis.com/gcm/send/cQGjG7I5xuE:APA91bEUdbDWJSVSRFJPcDp182dMHw3CwfbDyc0vMmswlOm8FZYSazNj57FYX4uvsYRj0IYc3uSxBpCbGC4mrHq98igmUWDHGta3d-sTREnbdSNCsMMgrK-H9xYS3kU84AdUhBM3Zfu6",
    "keys": {
        "p256dh": "BAzxJ34qibEJTppvxnOu594czSJAuciBz5pu4jkSKI4h36hTYwo1oVYlelAE7XFV/gC/Mxk7fJ1Markt++26bkk=", 
        "auth": "+5gpT/K/bIkwY7b0YYkmqw=="
    }
};
var payload = 'Here is a payload!';
var options = {
    gcmAPIKey: 'AAAAG_54SPM:APA91bEO6SiCzkaSX0HIIr65Icyq1pjTWOog-Hkf4yaRWNfAP-8asQDqPwZh6rPyel1QpJ9roxbo1akgzmekpFIFX3SZdDE6P8ewdp-njlgMQR6p5KyI3VJh4q4A1_8_pynfK4uGW_Ea',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);

// curl "https://android.googleapis.com/gcm/send/cQGjG7I5xuE:APA91bEUdbDWJSVSRFJPcDp182dMHw3CwfbDyc0vMmswlOm8FZYSazNj57FYX4uvsYRj0IYc3uSxBpCbGC4mrHq98igmUWDHGta3d-sTREnbdSNCsMMgrK-H9xYS3kU84AdUhBM3Zfu6" --request POST --header "TTL: 60" --header "Content-Length: 0" --header "Authorization: key=AAAAG_54SPM:APA91bEO6SiCzkaSX0HIIr65Icyq1pjTWOog-Hkf4yaRWNfAP-8asQDqPwZh6rPyel1QpJ9roxbo1akgzmekpFIFX3SZdDE6P8ewdp-njlgMQR6p5KyI3VJh4q4A1_8_pynfK4uGW_Ea"