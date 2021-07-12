import App from "./Pages/App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "StockMe",
  },
});
export default app;
