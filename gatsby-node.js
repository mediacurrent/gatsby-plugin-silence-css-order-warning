exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
  // Silence 'conflicting order' warning for CSS modules.
  // This is only an issue with regular CSS being imported.
  if (stage === 'develop') {
    const config = getConfig()
    // Get the mini-css-extract-plugin
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    )
    // Set the option here to true.
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    // Update the config.
    actions.replaceWebpackConfig(config)
  }
}
