export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    console.log(request, env, ctx);
    if (url.pathname === "/fetch") {
      const remote = "http://localhost:8001/json";
      return await fetch(remote, request);
    }
    if (url.pathname === "/formData") {
      const formData = await request.formData();
      console.log(formData);
      return new Response(formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
    }
    if (url.pathname === "/json") {
      return new Response(JSON.stringify({ json: "data" }), {
        headers: {
          "content-type": "applications/json;charset=UTF-8",
        },
      });
    }
    if (url.pathname === "/html") {
      const html = `<!DOCTYPE html>
		<body>
		  <h1>Hello World</h1>
		  <p>This markup is for testing.</p>
		</body>`;

      return new Response(html, {
        headers: {
          "content-type": "text/html;charset=UTF-8",
        },
      });
    }

    return new Response("Hello from Workerd!");
  },
};
console.log("the workerd run on http://localhost:8080");
