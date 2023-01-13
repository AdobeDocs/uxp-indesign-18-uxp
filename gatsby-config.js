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
  pathPrefix: process.env.PATH_PREFIX || '/indesign-test/uxp/uxp_ref/',
  siteMetadata: {
    pages: [
      {
        title: 'UXP API',
        path: '/'
      },
      {
        title: 'UXP for indesign-test',
        path: '/indesign-test/uxp/'
      },
      {
        title: 'Guides',
        path: '/indesign-test/uxp/guides/'
      },
      {
        title: 'Plugins',
        path: '/indesign-test/uxp/plugins/'
      },
      {
        title: 'indesign-test Server',
        path: '/indesign-test/uxp/server/'
      },
      {
        title: 'References',
        menu: [
          {
            title: 'UXP API',
            path: '/indesign-test/uxp/uxp_ref/',
          },
          {
            title: 'indesign-test API',
            path: '/indesign-test/dom/',
          },
          {
            title: 'Recipes',
            path: '/indesign-test/uxp/reference/recipes/'
          }
        ]
      },
      {
        title: 'Code Samples',
        path: '/indesign-test/uxp/reference/uxp-scripting-samples/'
      },
      {
        title: 'Support',
        path: '/indesign-test/uxp/support/'
      }
    ],
    subPages: [
      {
        title: "UXP API Reference",
        path: "/indesign-test/uxp/uxp_ref/",
        header: true,
        pages: [
          {
            title: "JavaScript Reference",
            path: "/reference-js/",
            pages: require("./reference-js.js"),
          },
          {
            title: "CSS Reference",
            path: "/reference-css/",
            pages: require("./reference-css.js"),
          },
          {
            title: "HTML Reference",
            path: "/reference-html/",
            pages: require("./reference-html.js"),
          },
          {
            title: "Spectrum UXP Reference",
            path: "/reference-spectrum/",
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
