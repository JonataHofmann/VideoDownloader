
const fs = require('fs');
const request = require('sync-request');

const url = "https://gcs-vimeo.akamaized.net/exp=1578671665~acl=%2A%2F1378681427.mp4%2A~hmac=4365e99f7bebffaa7ff088ec5ccd550dc1574545a01207c4b81ef31799138755/vimeo-prod-skyfire-std-us/01/3797/13/343986670/1378681427.mp4"

var res = request('GET', url);

console.log(res)