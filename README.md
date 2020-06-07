# Parse Sample Client + Server App

### Prerequisites
*  <a href="https://www.mongodb.com/download-center/community">MongoDB</a> (v4.2 as of writing)
* <a href="https://nodejs.org/en/download/">Node</a> (v10.20.1 as of writing)


## Server
<p align="left">
    <img alt="Parse Server" src="https://github.com/parse-community/parse-server/raw/master/.github/parse-server-logo.png" width="500">
  </a>
</p>
Parse Server is an open source backend that can be deployed to any infrastructure that can run Node.js.

Read more <a href="https://github.com/parse-community/parse-server">Here</a>

* ### Prerequisite
    * MongoDB should be installed and running
    * Create db `test` (this can be changed in `config.json`)

* ### How to run
    * from root directory (server)
    * `npm install`
    * `npm run server`
    * Upon successful start you will see <br> `[9346] parse-server running on http://localhost:1338/parse`
    * NOTE: The above is your API endpoint for all backend operations. Parse also supports a REST API (alternate to JS SDK) <a href="https://docs.parseplatform.org/rest/guide/"> Read more </a>



## Client

Client application is built with Backbone.js (router support ), jQuery and Webpack for build tool. This can easily be changed to a nodejs Express application or any other framework for that matter.

The Parse Javascript SDK is used for server communication. All CRUD methods are supported but this demo only focusses on Save and Get.

Read more about the SDK <a href="https://docs.parseplatform.org/js/guide/#getting-started">Here</a>

* ### How to run
    * from root directory (client)
    * `npm install`
    * `npm run start`
    * Launch `localhost:3000` in your favorite browser (Hopefully not IE)

