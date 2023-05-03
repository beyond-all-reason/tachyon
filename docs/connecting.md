# Connection from Application to Server
The server should specify REST API endpoints for:
- Creating an account
- Creating/getting a token for the account
- A websocket URL to connect on

Once you have these you can connect to the server with a websocket request. You will need the following parameters in the connection body:
- `token`: The token sent from the server, this will be used to log you in
- `application_name`: A string of the name of your application
- `application_version`: A string containing the semantic version (x.y.z) of your application
- `application_hash`: A string used to identify the machine the user is connecting from, it should remain consistent between connections from that machine

## Example Teiserver workflow
#### Create account
```
POST https://example.org/tachyon/register
body: {
  "user": {
    "password": "hunter2",
    "email": "email@email.com",
    "name": "example_user"
  }
}
```

#### Request token
```
POST https://example.org/tachyon/request_token
body: {
  "email": "email@email.com",
  "password": "hunter2"
}

JSON response: {
  "result": "success",
  "token_value": "abcdefg"
}
```

#### Create ws connection
```
ws://example.org/tachyon/websocket
params: {
  "token": "abcdefg",
  "application_hash": "123456789",
  "application_version": "1.2.3",
  "application_name": "ExampleApplication"
}
```