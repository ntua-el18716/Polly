const axios = require('axios');

const fs = require('fs');
const https = require('https');


module.exports = function(o) {

    let pid=o.questionnaireID;
    let sid=o.sessionID;


    console.log(pid,sid);

    if (pid != undefined && sid != undefined){

        let url='http://localhost:9103/inteliq_api/getsessionanswers/'+pid+'/'+sid;


        axios
            .get(url)
            .then((res) => {
             console.log(res.data.rsp);
        })
    .catch((err) => console.log(err));
        
    
    }
    else {
    console.log("Give Correct Parameters");

    }
}