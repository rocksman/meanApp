module.exports = {

    'facebookAuth' : {
        'clientID'      : '1024948137707219', // your App ID
        'clientSecret'  : '03601ebb0a604f80d9af78ae7d255356', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    }
};
