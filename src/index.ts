export interface Env {
  // Define any environment variables your worker needs here
}

export default {
  fetch: async (req: Request, env: Env) => {
    return new Response("Hello, World!", {
      headers: { "content-type": "text/plain" },
    });
  },
};