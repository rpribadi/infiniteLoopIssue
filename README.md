# infiniteLoopIssue

This is a sample for investigating this issue: https://github.com/mjrussell/redux-auth-wrapper/issues/44

To run:
```shell
    npm start
```

To enable infinite loop:

```javascript
// filename: src/routes/Product/index.js

      // Enable UserIsAuthenticated for infinite loop
      cb(null, UserIsAuthenticated(Container));

      // Disabled UserIsAuthenticated for normal flow
      //cb(null, Container);

```

To disable infinite loop:
```javascript
// filename: src/routes/Product/index.js

      // Enable UserIsAuthenticated for infinite loop
      //cb(null, UserIsAuthenticated(Container));

      // Disabled UserIsAuthenticated for normal flow
      cb(null, Container);

```