# XEDI JS SDK

![Tests](https://github.com/xedi/sdk-js/workflows/Test/badge.svg?event=push)

---
## Setup

**XEDI SDK is currently only available via NPM**

```shell
npm install --save @xedi/sdk-js
```

This library is currently, only supported in browser.
```html
<script src="path/to/sdk.min.js"></script>
```

The library is entirely self contained. Once loaded it, it is available on the Global object as `Xedi`.

## Configuration

You can configure the library using the `Xedi.Config` class. This class extends a JavaScript `Map` object so the usual `get`, `set`, and `delete` methods will work as per the original object. For example, I can configure the library to use a particular URL rather than the built in default.

```js
Xedi.Config.set('base_url', 'https://api.staging.xedi.com');
```


## Authentication

```js
Xedi.Auth.login('user@example.com', 'supersecretpassword')
    .then(() => {
        console.log('Hurray! You\'re logged in');
    });
```

The authentication state is managed internally of the library using short-lived refresh tokens. The library will automatically renew your access tokens and retry any command that fails due to expired tokens. Occassionally, this won't be possible; in that instance, the method you ran will return a rejected promise with the string "**Re-authentication required**".

If you need to switch business context, the `Xedi.Auth.switchContext()` method will take the _XUID_ of the Business whose context you wish to operate in. This operation returns updated `access` and `refresh` tokens so be sure to update any references you are tracking. It will also return a representation of the Business.

When you are done and wish to invalidate your authenticate tokens, call then `Xedi.Auth.logout()` method.

**Note**: This revokes your `refresh` token preventing it from being used to generate new `access` tokens. You're `access` token is still valid for the remainder of its `time-to-live`.

The Auth class also emits a number of events which you can subscribe to using the `Xedi.Auth.on()` method.

```js
Xedi.Auth.on('auth.updated', (event) => {
    console.log(`Auth state updated by ${ event.method }`);
    console.log(`Current user: ${ event.data.user.first_name } `);
    if (event.data.hasOwnProperty('business')) {
        console.log(`Current business: ${ event.data.business.name }`);
    }
});
```

## HTTP Requests

This library uses `Axios` to perform HTTP requests. It is not directly exposed like the API classes. Should you need to access it, you can resolve an instance in the following way.

```js
Xedi.resolveInstance().resolve('client');
```

The returned client will be pre-configured to utilize our authentication flow as well as using the configured `base_url`, which if not specified will be `https://api.xedi.com`.

## Developing

This library is written mostly in TypeScript. Whilst a number of editors support TypeScript, VS Code or Visual Studio appear to have the best level of integration.

The entrypoint, where you will find the XEDI definition is `src/index.ts`. To test the library out, there is a playground (of sorts) provided. To get around CORS issues you should use the provided `npm run start` command, which will start an instance of the webpack development server.

This command also acts as a watch command with live refresh.

Make sure you specify the correct API Gateway URL in the Configuration form.
