module.exports = {
  apps: [
    {
      name      : "vilnyy-web",
      script    : "npx",
      interpreter: "none",
      args: "serve -s build"
    }
  ]
};