# gatsby-plugin-silence-css-order-warning

## Description

For some projects, you may be using CSS Modules or another CSS-in-JS library to safely scope CSS between pages and components.  The webpack `mini-css-extract-plugin` however, still warns that the CSS might be bundled out of order.  The warning is:

```
warn chunk styles [mini-css-extract-plugin] Conflicting order. Following module has been added:
```

As long as you are properly using your CSS-in-JS library, this warning can be ignored.
## How to install

`npm install gatsby-plugin-silence-css-order-warning`

Then add the plugin to your `gatsby-config.js` file.

```
module.exports = {
  plugins: [
    'gatsby-plugin-silence-css-order-warning'
  ]
}
```

## Caution
Because this plugin silences the warning completely, it may swallow a valid warning of CSS order bundling that you may have in your project.