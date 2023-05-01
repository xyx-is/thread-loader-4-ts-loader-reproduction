const path = require("path");

module.exports = (env, argv) => {
  const config = {
    mode: "development",
    entry: {
      main: path.resolve(__dirname, "src/index.ts"),
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "thread-loader",
            },
            {
              loader: "ts-loader",
              options: { transpileOnly: true, happyPackMode: true },
            },
          ],
        },
      ],
    },
  };
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);
  return config;
};
