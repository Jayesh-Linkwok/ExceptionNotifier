var winston = require('winston');
var CustomMail = require('./CustomMail');

var logger = new(winston.Logger)({
    transports: [
        new(winston.transports.File)({
            filename: './log/exceptions.log',
            handleExceptions: true,
            humanReadableUnhandledException: true,
            json: false,
            formatter: function(options) {
                var response = 'Date: ' + (options.meta.date) + ',\n' +
                    'Level: ' + options.level.toUpperCase() + ',\n' +
                    'Error: ' + (options.message ? options.message : '') + ',\n' +
                    'Stack: ' + (options.meta.stack).toString().replace(/    /g, "\n\t") + '\n\n';
                return response;
            }
        }),
        new(winston.transports.Console)({
            colorize: true,
            handleExceptions: true,
            humanReadableUnhandledException: true,
            json: false,
            formatter: function(options) {
                var response = 'Date: ' + (options.meta.date) + ',\n' +
                    'Level: ' + options.level.toUpperCase() + ',\n' +
                    'Error: ' + (options.message ? options.message : '') + ',\n' +
                    'Stack: ' + (options.meta.stack).toString().replace(/    /g, "\n\t") + '\n\n';
                return response;
            }
        }),
        new(winston.transports.LinkwokEmail)({
            to: 'Rushabh Hathi <rushabh@linkwok.com>,Jayesh Bhadja <jayesh@linkwok.com>',
            from: 'Jayesh Bhadja <jayesh@linkwok.com>',
            service: 'gmail',
            auth: {
                user: 'jayesh@linkwok.com',
                pass: 'Jayesh@linkwok'
            },
            handleExceptions: true,
            humanReadableUnhandledException: true,
            formatter: function(options) {
                var response = 'Date: ' + (options.meta.date) + ',\n' +
                    'Level: ' + options.level.toUpperCase() + ',\n' +
                    'Error: ' + (options.message ? options.message : '') + ',\n' +
                    'Stack: ' + (options.meta.stack).toString().replace(/    /g, "\n\t") + '\n\n';
                return response;
            }
        }),
    ],
    exitOnError: false
});



// var a = 1 / 0;
// var b = (a - a) * 3;
//
console.log(isNan(a));
console.log(isNan(b));
