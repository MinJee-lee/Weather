   const request = require('request');
   const nodemailer = require('nodemailer');
   var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: "0212a798e88e2c",
    pass: "204036627a05bd"
      }
    });
   const options = {
     method: 'GET',
     url: 'http://api.openweathermap.org/data/2.5/weather',
     qs: {q: 'Seoul', appid: '6d0d0da647fa9d1c76bdfe3667e2c413'}
   };
   request(options, function (error, response, body) {
     if (error) throw new Error(error);
     parseBody = JSON.parse(body)
     currentWeather = parseBody.weather[0]
     console.log(currentWeather.id);
     var weatherCondition = ""
     if(currentWeather.id >= 200 && currentWeather.id <= 622){
        weatherCondition = "Bad"
     }else{
        weatherCondition = "Good"
     }

     let info = transport.sendMail({
       from: '"Fred Foo 👻" <foo@example.com>', // sender address
       to: "bar@example.com, baz@example.com", // list of receivers
       subject: "날씨 알림", // Subject line
       text: `Weather is ${weatherCondition}`, // plain text body
     });
   });