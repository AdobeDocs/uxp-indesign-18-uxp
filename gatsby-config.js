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
        title: 'Introduction',
        path: '/indesign/uxp/introduction/'
      },
      {
        title: 'Scripts',
        path: '/indesign/uxp/scripts/'
      },
      {
        title: 'Plugins',
        path: '/indesign/uxp/plugins/'
      },
      {
        title: 'Resources',
        path: '/indesign/uxp/resources/'
      },
      {
        title: 'References',
        menu: [
          {
            title: 'What\'s New',
            path: '/indesign/uxp/changelog/'
          },
          {
            title: 'UXP API',
            path: '/uxp-api/',
          },
          {
            title: 'InDesign API',
            path: '/indesign/dom/api/'
          }
        ]
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
