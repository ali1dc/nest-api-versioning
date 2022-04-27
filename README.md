
## Description
Versioning allows you to have different versions of your controllers or individual routes running within the same application. Applications change very often and it is not unusual that there are breaking changes that you need to make while still needing to support the previous version of the application.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Versioning
[Here](https://docs.nestjs.com/techniques/versioning) is the documentation for API versioning.
See it in action:
```bash
# the current version is v1
$ curl localhost:3000/v1/users | jq
[
  {
    "id": 1,
    "user_name": "jon",
    "email": "jon@gmail.com"
  },
  {
    "id": 2,
    "user_name": "steve",
    "email": "steve@yahoo.com"
  },
  {
    "id": 3,
    "user_name": "megan",
    "email": "megan@msn.com"
  }
]
```
If you use the url with no version, it should return current version which we assumed it is `v1`:
```bash
$ curl localhost:3000/v1/users | jq
[
  {
    "id": 1,
    "user_name": "jon",
    "email": "jon@gmail.com"
  },
  {
    "id": 2,
    "user_name": "steve",
    "email": "steve@yahoo.com"
  },
  {
    "id": 3,
    "user_name": "megan",
    "email": "megan@msn.com"
  }
]
```
Now, let's hit the new version of our API, `v2`:
```bash
$ curl localhost:3000/v2/users | jq
[
  {
    "user_name": "jon",
    "email": "jon@gmail.com",
    "phone": "777-777-7777"
  },
  {
    "user_name": "steve",
    "email": "steve@yahoo.com",
    "phone": "666-666-6666"
  },
  {
    "user_name": "megan",
    "email": "megan@msn.com",
    "phone": "555-555-5555"
  }
]
```
And finally, you can hit the health url without worrying about versioning, since the default version is `VERSION_NEUTRAL`:
```bash
curl localhost:3000/health | jq
{
  "healthy": "yes"
}
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
