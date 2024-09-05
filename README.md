# my-workerd-app

### what is this project and why

this is a simple project that uses `workerd` as the runtime ` similar to nodejs, deno, and bun`
this project create and manage using [Bun](https://bun.sh)

### what is workerd

Workerd is the open-source JavaScript/Wasm runtime that powers Cloudflare Workers. It allows you to run serverless applications at the edge

To install dependencies:

```bash
bun install -yes
```

To run:

```bash

bun run workerd

# the above line run this command for you
workerd serve config.capnp

# or if you want to use wrangler
wrangler dev src/hello.js --port=8080

```

To test the endpoints:

```bash

curl -v http://localhost:8080/html

curl -v http://localhost:8080/req

curl -v http://localhost:8080/json

curl -v http://localhost:8080/fetch

curl -v http://localhost:8080/formData -d 'name=John Doe&email=john@example.com'

```
