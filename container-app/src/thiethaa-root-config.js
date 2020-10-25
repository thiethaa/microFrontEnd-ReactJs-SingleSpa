import {
  registerApplication,
  start
} from "single-spa";

registerApplication({
  name: "@thiethaa/nav-bar",
  app: () =>
    System.import("@thiethaa/nav-bar"),
  activeWhen: ['/'],
});

registerApplication({
  name: "@thiethaa/page-one",
  app: () =>
    System.import("@thiethaa/page-one"),
  activeWhen: (location) => location.pathname === '/page-one',
});

registerApplication({
  name: "@thiethaa/page-two",
  app: () =>
    System.import("@thiethaa/page-two"),
  activeWhen: (location) => location.pathname === '/page-two',
});

registerApplication({
  name: "@thiethaa/page-three",
  app: () =>
    System.import("@thiethaa/page-three"),
  activeWhen: (location) => location.pathname === '/page-three',
});

start({
  urlRerouteOnly: true,
});