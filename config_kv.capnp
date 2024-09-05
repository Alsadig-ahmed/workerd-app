using Workerd = import "/workerd/workerd.capnp";

const config :Workerd.Config = (
  services = [
    (name = "main", worker = .mainWorker),
  ],
  sockets = [
    ( name = "http",
      address = "*:8080",
      http = (),
      service = "main"
    ),
  ]
);

const mainWorker :Workerd.Worker = (
  modules = [
    (name = "worker", esModule = embed "src/kv.js")
  ],
  compatibilityDate = "2023-02-28",
  bindings = [
    (name = "KV", kvStore = .exampleKv),
  ]
);

const exampleKv :Workerd.KvStore = ();
