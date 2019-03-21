var webPush = require('web-push');
var pushSubscription = {
    "endpoint": "https://android.googleapis.com/gcm/send/eVtBbdErTMw:APA91bGrupAUhUAPbLdtiYEacXIHuGd0VQTWiHAtq8OyJoCuGgR6im1OlkTUjDL_BKwGZ3A8EelRLfPTL06wLGxQzUj3NAWUBiKUTJhCzo93P7XLV6MkHXwFdPXCHxjj5O1bfrbwTLPx",
    "keys": {
        "p256dh": "BDbTaKdAAHKNsGRV1KFE9Dtl7HC2FNZsrfO5pU7yrFbawjxr3RowShXhLyv7vnMFFkMBQ7USb4WczDhdl7WVTmo=", 
        "auth": "8Pw+vIIY+gxmygsbisxsGg=="
    }
};
var payload = 'Here is a payload!';
var options = {
    gcmAPIKey: 'AAAA7uGQMJg:APA91bEofIoyI2V2yts4_HjmohSNp600JfLjB8GzWkvK8-Kn3kzLCMw6eoBVeR8E2doOV-gWD77uF_a3h9aqXYsx6g_A2CSd2P82k-Tr28MPoukdC0bv_cYbLa1qod8v4X-zKYQHuPBO', // server key firebase
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);

