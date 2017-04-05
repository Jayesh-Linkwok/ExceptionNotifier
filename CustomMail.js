var util = require('util');
var winston = require('winston');
var nodemailer = require('nodemailer');
var mustache = require('mustache');

var LinkwokEmail = exports.LinkwokEmail = function(options) {
    winston.Transport.call(this, options);
    options = options || {};

    if (!options.to) {
        throw new Error("Exception-mail requires 'to' property");
    }

    this.showLevel = options.showLevel === undefined ? true : options.showLevel;
    this.name = options.name || 'LinkwokEmail';
    this.to = options.to || 'Rushabh Hathi <rushabh@linkwok.com>,Jayesh Bhadja <jayesh@linkwok.com>, Kapil Bhonge <kapil@linkwok.com>';
    this.from = options.from || 'Linkwok Notifier <notifier@linkwok.com>';
    this.level = options.level || 'info';
    this.unique = options.unique || false;
    this.silent = options.silent || false;
    this.subject = options.subject || 'Notification: {{level}} - {{msg}}';
    this.html = options.html || false; // Send mail in html format
    this.formatter = options.formatter || false;

    this.handleExceptions = options.handleExceptions || false;
    this.humanReadableUnhandledException = options.humanReadableUnhandledException || false;

    this.smtpTransport = nodemailer.createTransport(options);
}

util.inherits(LinkwokEmail, winston.Transport);

winston.transports.LinkwokEmail = LinkwokEmail;

LinkwokEmail.prototype.name = 'linkwokemail';

LinkwokEmail.prototype.log = function(level, msg, meta, callback) {
    var self = this;
    if (this.silent) return callback(null, true);
    if (this.unique && this.level != level) return callback(null, true);

    if (this.formatter) {
        body = this.formatter({
            level: level,
            message: msg,
            meta: meta
        });
    } else {
        var body = msg;

        if (meta instanceof Error) {
            meta = {
                message: meta.message,
                name: meta.name,
                stack: meta.stack,
            };
        }

        if (meta !== null && meta !== undefined && (typeof meta !== 'object' || Object.keys(meta).length > 0))
            body += '\n\n' + util.inspect(meta, {
                depth: 5
            });
    }

    var subject = mustache.render(this.subject, {
        level: level,
        msg: msg.split('\n')[0]
    });

    this.smtpTransport.sendMail({
        from: this.from,
        to: this.to,
        subject: subject,
        text: body,
    }, callback);
    self.emit('logged');
}
