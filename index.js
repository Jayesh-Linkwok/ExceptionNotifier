var winston = require('winston');
var http = require('http');
require('winston-mailer').Mail;
// winston.add(winston.transports.File, { filename: 'winston_test.log' });

// winston.add(winston.transports.File, {
//   filename: 'exceptions.log',
//   handleExceptions: true,
//   humanReadableUnhandledException: true
// });

// winston.add(winston.transports.File, {
//     filename: './log/exceptions.log',
//     colorize: true,
//     handleExceptions: true,
//     humanReadableUnhandledException: true,
//     json: false,
//     formatter: function(options) {
//         response = 'Date: ' + (options.meta.date) + ',\n' +
//             'Level: ' + options.level.toUpperCase() + ',\n' +
//             'Error: ' + (options.message ? options.message : '') + ',\n' +
//             'Stack: ' + (options.meta.stack).toString().replace(/    /g, "\n\t") + '\n\n';
//         return response;
//     }
// });

winston.add(winston.transports.Mail, {
    to: 'jayesh@linkwok.com',
    from: 'jayesh@linkwok.com',
    host: 'smtp.gmail.com',
    port: '587',
    username: 'jayesh@linkwok.com',
    password: 'Jayesh@linkwok',
    level: 'error',
    prefix:'Exception',
});




// winston.add(winston.transports.Http, {
//     host: 'https://emailsenderlinkwok.herokuapp.com/',
//     port: '8082',
//     path: '/mail',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json; charset=utf-8',
//         'Content-Length': data.length
//     }
//     handleExceptions: true,
//     humanReadableUnhandledException: true,
//     json: false,
//     formatter: function(options) {
//         response = 'Date: ' + (options.meta.date) + ',\n' +
//             'Level: ' + options.level.toUpperCase() + ',\n' +
//             'Error: ' + (options.message ? options.message : '') + ',\n' +
//             'Stack: ' + JSON.stringify(options.meta.stack) + '\n\n';
//         return response;
//     }
// });

// winston.handleExceptions(new winston.transports.File({ filename: 'exceptions.log' }));

// throw new Error("Jayesh Error");


// var logger = new(winston.Logger)({
//     transports: [
//         new(winston.transports.File)({
//             filename: './log/exceptions.log',
//             handleExceptions: true,
//             humanReadableUnhandledException: true,
//             json: false,
//             formatter: function(options) {
//                 var response = 'Date: ' + (options.meta.date) + ',\n' +
//                     'Level: ' + options.level.toUpperCase() + ',\n' +
//                     'Error: ' + (options.message ? options.message : '') + ',\n' +
//                     'Stack: ' + (options.meta.stack).toString().replace(/    /g, "\n\t") + '\n\n';
//                 return response;
//             }
//         })
//     ],
//     exitOnError: false
// });

// winston.add(winston.transports.Mail, options);

// winston.loggers.add('logger', {
//   email: {
//     from   : 'jayesh@linkwok.com',
//     to     : 'jayesh@linkwok.com',
//     service: 'gmail',
//     auth   : { user: 'jayesh@linkwok.com', pass: 'Jayesh@linkwok'},
//     tags   : ['your app'] //optional tags for the subject
//   }
//   // other transports
// });
//
// // logger.log('error', 'Hey//!!');
// logger = winston.loggers.get('logger');
// logger.info("info msg", {title:'optional title'});
// logger.warn("info msg", {title:'optional title'});
// logger.debug("info msg", {title:'optional title'});
// logger.error("info msg", {title:'optional title'});

//
// logger.add(winston.transports.File);

// function sendExceptionEmail(body_data) {
//     // Build the post string from an object
//     var body = {
//         'personalizations': [{
//             'to': [{
//                 'email': 'jayesh@linkwok.com',
//                 'name': 'Jayesh Bhadja'
//             }],
//             'substitutions': {
//                 '-name-': 'Jayesh',
//                 '-from-': 'Linkwok Admin',
//                 '-content-': 'This content is for Jayesh',
//             },
//             'subject': 'Exception',
//         }],
//         'from': {
//             'email': 'admin@linkwok.com',
//             'name': 'Linkwok Admin'
//         },
//         'content': [{
//             'type': 'text/html',
//             'value': '<h3>' + body_data + '</h3>'
//         }],
//         'template_id': '27a0fbc7-b186-4dd2-b690-5f65222e82f6',
//     };
//
// // An object of options to indicate where to post to
// var post_options = {
//     // host: 'https://emailsenderlinkwok.herokuapp.com/',
//     host: 'http://localhost:8082/mail',
//     port: '80',
//     path: '/mail',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//     }
// };
//
// // Set up the request
// var post_req = http.request(post_options, function(res) {
//     res.setEncoding('utf8');
//     res.on('data', function(chunk) {
//         console.log('Response: ' + chunk);
//     });
//     res.end();
// });
//
// // post the data
// post_req.write(JSON.stringify(body));
// post_req.end();
// }



// var a = 1 / 0;
// var b = (a - a) * 3;
//
console.log(isNan(a));
