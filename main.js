var feeds = [
    'https://localhost/history.rss',
    'https://status.mailgun.com/history.rss',
    'https://www.githubstatus.com/history.rss',
    'https://status.gitlab.com/pages/5b36dc6502d06804c08349f7/rss',
    'https://www.cloudflarestatus.com/history.rss',
    'https://status.digitalocean.com/history.rss',
    'https://status.bunnycdn.com/history.rss',
    'https://www.google.com/appsstatus/rss/en',
    'http://status.activecampaign.com/history.rss',
    'https://status.adroll.com/history.rss',
    'https://status.affirm.com/history.rss',
    'https://status.airbrake.io/history.rss',
    'https://status.aircall.io/history.rss',
    'https://status.airship.com/history.rss',
    'https://status.alertlogic.com/history.rss',
    'https://status.amplitude.com/history.rss',
    'http://status.angel.co/history.rss',
    'https://status.aptible.com/history.rss',
    'https://status.appneta.com/history.rss',
    'https://status.appcues.com/history.rss',
    'https://status.apigee.com/history.rss',
    'https://developer.status.atlassian.com/history.rss',
    'https://access.status.atlassian.com/history.rss',
    'https://trust.asana.com/history.rss',
    'https://www.articulatestatus.com/history.rss',
    'https://status.aweber.com/history.rss',
    'https://status.avalara.com/history.rss',
    'https://status.authorize.net/history.rss',
    'https://status.atomist.com/history.rss',
    'https://support.status.atlassian.com/history.rss',
    'https://partners.status.atlassian.com/history.rss',
    'https://status.azion.com/history.rss',
    'https://azurestatuscdn.azureedge.net/en-us/status/feed/',
    'https://status.bandwidth.com/history.rss',
    'https://status.baremetrics.com/history.rss',
    'http://feeds.feedburner.com/beanstalkstatus',
    'https://status.bigcartel.com/history.rss',
    'https://status.bigcommerce.com/history.rss',
    'https://status.binarylane.com.au/history.rss',
    'https://status.bintray.com/history.rss',
    'https://bitbucket.status.atlassian.com/history.rss',
    'https://status.bitly.com/history.rss',
    'https://status.bitrise.io/history.rss', 
    'https://status.boldcommerce.com/history.rss',
    'http://status.truesight.bmc.com/history.rss',
    'https://status.blueshift.com/history.rss',
    'https://status.bluejeans.com/history.rss',
    'https://status.bonsai.io/history.rss',
    'https://status.box.com/history.rss',
    'https://status.branch.io/history.rss',
    'https://status.upserve.com/history.rss',
    'https://status.brightcove.com/pages/534ec4a0b79718bb73000083/rss',
    'https://status.brightpearl.com/history.rss',
    'https://status.callfire.com/history.rss',
    'https://www.calendlystatus.com/history.rss',
    'https://status.bugsnag.com/history.rss',
    'https://status.buffer.com/history.rss',
    'https://status.bubble.io/history.rss',
    'https://status.browserstack.com/history.rss',
    'https://callpage.statuspage.io/history.rss',
    'https://status.campaignmonitor.com/history.rss',
    'https://status.chef.io/history.atom',
    'https://circleci.statuspage.io/history.rss',
    'https://chartbeat.statuspage.io/history.rss',
    'http://status.cloud66.com/pages/55a770a50a54eb8c710005a9/rss',
    'https://status.codeclimate.com/history.rss',
    'https://status.codecov.io/history.rss',
    'https://codeship.statuspage.io/history.rss',
    'https://coinbase.statuspage.io/history.rss',
    'https://status.compose.com/history.rss',
    'https://confluence.status.atlassian.com/history.rss',
    'https://www.contentfulstatus.com/history.rss',
    'https://status.coveralls.io/history.rss',
    'https://status.customerio.com/history.rss',
    'https://status.datadoghq.com/history.rss',
    'https://datadogintegrations.statuspage.io/history.rss',
    'https://status.discordapp.com/history.rss',
    'https://dnsimple.statuspage.io/history.rss',
    'https://dnsstatus.com/rss',
    'https://status.docker.com/pages/533c6539221ae15e3f000031/rss',
    'https://status.firebase.google.com/feed.atom',
    'https://status.fastly.com/history.rss',
    'https://status.expensify.com/history.rss',
    'https://engineyard.statuspage.io/history.rss',
    'https://status.endicia.com/history.rss',
    'https://easypost.statuspage.io/history.rss',
    'https://geckoboard.statuspage.io/history.rss',
    'https://status.gotomeeting.com/history.rss',
    'https://grafanalabs.statuspage.io/history.rss',
    'https://status.gusto.com/history.rss',
    'https://www.harveststatus.com/history.rss',
    'https://status.hashicorp.com/history.rss',
    'https://status.helpscout.com/history.rss',
    'https://status.imperva.com/history.rss',
    'https://status.ifttt.com/history.rss',
    'https://status.iron.io/history.rss',
    'https://www.intercomstatus.com/history.rss',
    'https://status.instapage.com/history.rss',
    'https://letsencrypt.status.io/pages/55957a99e800baa4470002da/rss',
    'https://status.lastpass.com/history.rss',
    'https://jira-core.status.atlassian.com/history.rss',
    'https://jira-service-desk.status.atlassian.com/history.rss',
    'https://jira-software.status.atlassian.com/history.rss',
    'https://status.maxcdn.com/history.rss',
    'https://mailjet.statuspage.io/history.rss',
    'https://status.mailgun.com/history.rss',
    'https://status.logz.io/history.rss',
    'https://status.loggly.com/history.rss',
    'https://status.zapier.com/history.rss',
    'https://status.npmjs.org/history.rss',
    'http://ns1status.com/rss',
    'https://status.newrelic.com/history.rss',
    'https://www.netlifystatus.com/history.rss',
    'https://status.mixpanel.com/history.rss',
    'https://www.traviscistatus.com/history.rss',
    'https://trello.status.atlassian.com/history.rss',
    'https://status.twilio.com/history.rss',
    'https://metastatuspage.com/history.rss',
    'https://status.serverdensity.com/history.rss',
    'https://status.sentry.io/history.rss',
    'https://status.sendgrid.com/history.rss',
    'https://status.rollbar.com/history.rss',
    'https://reddit.statuspage.io/history.rss',
    'https://status.readme.io/history.rss',
    'http://status.quickbooks.intuit.com/history.rss',
    'https://status.plivo.com/history.rss',
    'https://status.pagerduty.com/history.rss',
];

const Parser = require('rss-parser');
const parser = new Parser();
const md5 = require('md5');
const fs = require('fs');
const mysql      = require('mysql2/promise');

var feeds_ran = 0;

feeds.forEach(url => {
    ProcessFeed(url, function() {
        feeds_ran++;
        console.log(feeds_ran +"==" +feeds.length);
        if(feeds_ran == feeds.length) {
            process.exit(0);
        }
    });
});

async function ProcessFeed(url, callback) {
    var connection = 
        await mysql.createConnection({
          host     : 'localhost',
          user     : 'kg',
          password : fs.readFileSync('/opt/secrets/mysql', 'utf8').trim(),
          database : 'status_retriever'
        });

        try {
            var feed = await parser.parseURL(url);  
        }
        catch(E) {
            console.log(E);
            callback();
        }
    
        try {
            console.log(feed.title);
            var i = 0;
            while(feed.items.length > i) {
                var item = feed.items[i];
                var hash = md5(item.title+item.link);
                var date = new Date(item.pubDate);

                console.log(item.title + ' - ' + item.link + ' - ' + item.pubDate + ' - ' + hash);
    
                var sql = "SELECT * FROM status_items WHERE hash='"+hash+"'";
                var [rows, fields] = await connection.execute(sql);
                //console.log(JSON.stringify(rows[0]));

                // insert & alert goes inside this if
                if( typeof rows[0] != 'undefined' && typeof rows[0].hash == 'undefined') {
                    sql = "INSERT INTO status_items SET hash='"+hash+"',"+
                    " name="+connection.escape(item.title)+","+
                    " link="+connection.escape(item.link)+","+
                    " posted_at="+connection.escape(date.toMysqlFormat())+""
                    ;
                    //console.log(sql);
                    var insert = await connection.execute(sql);
                }

                i++;
            }
        }
        catch(E) {
            console.log(E);
            callback();
        }
    callback();
}

function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}

Date.prototype.toMysqlFormat = function() {
    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};

/*
CREATE TABLE status_items(
    hash char(32),
    name text,
    link text,
    posted_at datetime,
    PRIMARY KEY(hash)
);
*/
