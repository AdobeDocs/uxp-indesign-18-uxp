/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/indesign/uxp/reference/',
  siteMetadata: {
    pages: [
      {
        title: 'UXP for InDesign',
        path: '/indesign/uxp/'
      },
      {
        title: 'Guides',
        path: '/indesign/uxp/guides/'
      },
      {
        title: 'Plugins',
        path: '/indesign/uxp/plugins/'
      },
      {
        title: 'InDesign Server',
        path: '/indesign/uxp/server/'
      },
      {
        title: 'References',
        menu: [
          {
            title: 'UXP API',
            path: '/uxp-api/',
          },
          {
            title: 'InDesign API',
            path: '/indesign/dom/api/',
          },
          {
            title: 'Recipes',
            path: '/indesign/uxp/recipes/'
          }
        ]
      },
      {
        title: 'Code Samples',
        path: '/indesign/uxp/uxp-scripting-samples/'
      },
      {
        title: 'Support',
        path: '/indesign/uxp/support/'
      }
    ],
    subPages: [
      {
        title: "UXP API Reference",
        path: "/uxp-api/",
        header: true,
        pages: [
          {
            title: "JavaScript Reference",
            path: "/uxp-api/reference-js/",
            pages: require("./reference-js.js"),
          },
          {
            title: "CSS Reference",
            path: "/uxp-api/reference-css/",
            pages: require("./reference-css.js"),
          },
          {
            title: "HTML Reference",
            path: "/uxp-api/reference-html/",
            pages: require("./reference-html.js"),
          },
          {
            title: "Spectrum UXP Reference",
            path: "/uxp-api/reference-spectrum/",
            pages: require("./reference-spectrum.js"),
          },
          {
            title: "Known Issues",
            path: "/uxp-api/known-issues/",
          },
        ],
      },
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`]
};
