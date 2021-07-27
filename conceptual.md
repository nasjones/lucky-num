### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
  Restful Routing is a structure that matches http methods of Get, Put/Patch, Post, and Delete to crud protocol actions.  

- What is a resource?
  A resource is an object with a type, associated data, relationships to other resources that can be operated on by a set of resources

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
  A JSON api is limited in that it can only handle dictionaries, lists, and primitive types it can't represent SQLAlchemy model instances and also requires serialization.

- What does idempotent mean? Which HTTP verbs are idempotent?
  idempotent means an operation that can be called many times and the response each time will be the same as though it was only called once. GET, PUT/PATCH, DELETE

- What is the difference between PUT and PATCH?
  PUT updates the entire resource PATCH updates part of it.

- What is one way encryption?
  This is when it cannot be reversed.

- What is the purpose of a `salt` when hashing a password?
  To compare passwords properly

- What is the purpose of the Bcrypt module?
  to hash passwords

- What is the difference between authorization and authentication?
  authorization grants users the right to access something authentication confirms that the users information matches whats on file
