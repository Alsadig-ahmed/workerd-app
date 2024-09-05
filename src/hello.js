export default {
  async fetch(request, env, ctx) {
    return new Response(JSON.stringify({request, env, ctx}),{headers:{
"content-type": "applications/json"
    }});
    // return new Response("Hello from Workerd!");
  }
}
