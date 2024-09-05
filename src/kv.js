export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const key = url.searchParams.get('key');
    const value = url.searchParams.get('value');

    if (request.method === 'PUT' && key && value) {
      await env.KV.put(key, value);
      return new Response(`Set ${key} to ${value}`);
    } else if (request.method === 'GET' && key) {
      const result = await env.KV.get(key);
      return new Response(result || 'Key not found');
    } else {
      return new Response('Invalid request', { status: 400 });
    }
  }
}