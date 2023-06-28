# UXP API Reference for InDesign

For [InDesign documentation](https://developer.adobe.com/indesign/uxp/), there are multiple repo that come into play. 

This repo serves the content when the user clicks on [UXP API reference](https://developer.adobe.com/indesign/uxp/reference/uxp-api/). It shows the docs for the latest published UXP version available in InDesign. However, the tags can allow you to build an older or specific version locally. 


## How to develop

For local development, simply use:
```
$ yarn install
$ yarn dev
```

The changes can be seen in http://localhost:8000/uxp-api/

## How to make changes

1. Update the version of `uxp-documentation` in `package.json`.
2. Bump the version in `package.json`. (Good practice to match it with the UXP version.)
3. `$ yarn install`
4. `$ yarn prepare-uxp`
5. `$ yarn dev`