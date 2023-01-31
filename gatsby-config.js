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
  pathPrefix: process.env.PATH_PREFIX || '/indesigntest/uxp/uxp_ref/',
  siteMetadata: {
    pages: [
      {
        title: 'UXP API',
        path: '../indesigntest/uxp/'
      },
      {
        title: 'UXP for indesigntest',
        path: '../indesigntest/uxp/'
      },
      {
        title: 'Guides',
        path: '../indesigntest/uxp/guides/'
      },
      {
        title: 'Plugins',
        path: '../indesigntest/uxp/plugins/'
      },
      {
        title: 'indesigntest Server',
        path: '../indesigntest/uxp/server/'
      },
      {
        title: 'References',
        menu: [
          {
            title: 'UXP API',
            path: 'uxp',
          },
          {
            title: 'indesigntest API',
            path: '/indesigntest/dom/',
          },
          {
            title: 'Recipes',
            path: '/indesigntest/uxp/reference/recipes/'
          }
        ]
      },
      {
        title: 'Code Samples',
        path: '/indesigntest/uxp/reference/uxp-scripting-samples/'
      },
      {
        title: 'Support',
        path: '/indesigntest/uxp/support/'
      }
    ],
    subPages: [
      {
        title: "UXP API Reference",
        path: "uxp",
        header: true,
        pages: [
          {
            title: "JavaScript Reference",
            path: "uxp/reference-js/",
            pages: require("./reference-js.js"),
          },
          {
            title: "CSS Reference",
            path: "uxp/reference-css/",
            pages: require("./reference-css.js"),
          },
          {
            title: "HTML Reference",
            path: "uxp/reference-html/",
            pages: require("./reference-html.js"),
          },
          {
            title: "Spectrum UXP Reference",
            path: "uxp/reference-spectrum/",
            pages: require("./reference-spectrum.js"),
          },
          {
            title: "Known Issues",
            path: "/known-issues/",
          },
        ],
      },
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`]
};
