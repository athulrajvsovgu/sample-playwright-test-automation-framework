const plugins = [];

// Instrument for code coverage in development mode
if (process.env.NODE_ENV === "development") {
  plugins.push("istanbul");
}

module.exports = {
  presets: ["next/babel"],
  plugins,
};
