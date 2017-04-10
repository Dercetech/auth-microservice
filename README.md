# Authentication micro-service
This Node.js app is an open-source implementation of token-based authentication built on top of [Jérémie Mercier (Jem)](https://www.linkedin.com/in/jeremiemercier/)'s seamless [Trapezo](https://github.com/Dercetech/trapezo) dependency injection framework.
It was forked to [Trapezo-Express](https://github.com/Dercetech/trapezo-express) in order to offer a best-practice project stub for developpers willing to work on the Node.js / Mongo(ose) / Express / Mocha stack. [Follow Jem's projects on twitter](https://twitter.com/dercetech).

**To developpers** who would like to add their own functionalities: Use the [Trapezo-Express](https://github.com/Dercetech/trapezo-express) project stub instead of this one, as the stub is more likely to evolve.

## Quick start
You may begin with running the tests. To do so:
- install [MongoDB](https://www.mongodb.com/download-center#community) (community edition will do)
- Set the below environment variables
- run `npm install`
- run `npm test` and see all 50 tests succeed.
-- Mocha tests will automatically set the environment to "test"
-- See "test/test-env-setup.js"

Environment variables in Windows:<br/>
`set CFG_PWD=aPasswordToSecureToken`<br/>
`set CFG_MDB_TEST=mongodb://127.0.0.1:27017/micro-auth-test`

Environment variables in UNIX/MacOS:<br/>
`CFG_PWD=aPasswordToSecureToken`<br/>
`CFG_MDB_TEST=mongodb://127.0.0.1:27017/micro-auth-test`
## Installation
### Environment variables in dev
Development is the default environment. No specific variable is to be set to run in development mode.

`set CFG_PWD=aPasswordToSecureToken_forDev`<br/>
`set CFG_MDB=mongodb://127.0.0.1:27017/micro-auth`
- **hint** Remove the `set` command on UNIX/MacOS machines.

### Environment variables in production

`set CFG_PWD=aPasswordToSecureToken_forProd`<br/>
`set CFG_MDB_PROD=mongodb://127.0.0.1:27017/micro-auth-prod`<br/>
`set NODE_ENV=prod`
- **hint** Remove the `set` command on UNIX/MacOS machines.
- **hint** Environment check at runtime available in `process.env.NODE_ENV`.

## Developer guide
See the developer guide of the forked project stub [Trapezo-Express](https://github.com/Dercetech/trapezo-express) server.

## Notes
- Token Authentication is written based on the best practices detailed in the [Sophos guidelines](https://nakedsecurity.sophos.com/2013/11/20/serious-security-how-to-store-your-users-passwords-safely/).

## History
- **version 1.0.0** : Forked to [Trapezo-Express](https://github.com/Dercetech/trapezo-express) to offer a project stub allowing to focus on implementing business logic rather than rewriting the common denominator of cloud projects.
- **Prior to 1.0.0** : API was not stable, TDD was in progress and was heavier due to plugins that wouldn't suite a micro-service (like token revocation).
