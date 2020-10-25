import {
  registerApplication,
  start
} from "single-spa";

registerApplication({
  name: "@thiethaa/nav-bar",
  app: () =>
    System.import("@thiethaa/nav-bar"),
  activeWhen: ['/'],
  // domElement: document.getElementById('nav-container')
});

registerApplication({
  name: "@thiethaa/page-one",
  app: () =>
    System.import("@thiethaa/page-one"),
  activeWhen: (location) => location.pathname === '/page-one',
  // domElement: document.getElementById('page-1-container')
});

registerApplication({
  name: "@thiethaa/page-two",
  app: () =>
    System.import("@thiethaa/page-two"),
  activeWhen: (location) => location.pathname === '/page-two',
  // domElement: document.getElementById('page-2-container')
});

start({
  urlRerouteOnly: true,
});