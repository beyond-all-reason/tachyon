These endpoints relate to the creation and management of user accounts. The process of creating and logging into an account goes as follows:

1. Register an account via [register](#register)
2. If the server requires verification, it should send a one-time verification link to the registered email
3. Clients should then prompt the user for username/email and their password, which should be sent using the [getToken](#getToken) command with the password hashed using md5. Once received, the server should apply a secondary hash before storage, ideally salted
4. The server should generate and return a JSON Web Token that the user can use to login, and the client should store locally for future automated logins
5. Clients can then use the [login](#login) command to send the token. The server will return user data associated with the account, and the user is effectively logged-in
