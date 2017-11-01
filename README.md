#If you have any prolem with LintJS then run command
npm run lint -- --fix


[Best practise For KeyStoneJS](https://leanpub.com/keystonejs/read)
#IEach of the variables in the .env is declared as a key value pair separated by an equals sign. Keys are generally written in upper case. A fresh Keystone.js install .env file would be:

    1 COOKIE_SECRET=oQQ*s0pz5(bF4gpmoNwM|BDB~db+qwQ`K>Ik~*R2D;;F(8u["l5<.=&Q9w+Ul$E=
    2 MANDRILL_API_KEY=NY8RRKyv1Bure9bdP8-TOQ

To access the configuration variables in our application, we can use them as:

    1 var madrillApiKey = process.env.MANDRILL_API_KEY;

#  WARNING : !!!! Don't Ignore CONFIG .env

**I The default admin is created with the below code that is stored at /updates/0.0.1-admins.js with the following credentials: (email - user@keystonejs.com | password - admin)**

    1 exports.create = {
    2 	User: [
    3 		{ 'name.first': 'Admin', 'name.last': 'User', email: 'user@keystonejs.com',
    4 		password: 'admin', isAdmin: true }
    5 	]
    6 };