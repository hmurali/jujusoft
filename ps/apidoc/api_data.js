define({ "api": [
  {
    "type": "Post",
    "url": "/computer",
    "title": "CreateComputer",
    "name": "CreateComputer",
    "group": "Computer",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paramName",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    ip: '192.168.1.42',\n    name: 'office'\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    ip: '192.168.1.42',\n    name: 'office',\n    _id: ''\n}",
          "type": "type"
        }
      ]
    },
    "filename": "./api.routes.js",
    "groupTitle": "Computer"
  },
  {
    "type": "Delete",
    "url": "/computer/:computerid",
    "title": "DeleteComputer",
    "name": "DeleteComputer",
    "group": "Computer",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paramName",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    _id: ''\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ }",
          "type": "type"
        }
      ]
    },
    "filename": "./api.routes.js",
    "groupTitle": "Computer"
  },
  {
    "type": "Get",
    "url": "/computer",
    "title": "ListComputers",
    "name": "ListComputers",
    "group": "Computer",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paramName",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    ip: '192.168.1.42',\n    name: 'office',\n    _id: ''\n}]",
          "type": "type"
        }
      ]
    },
    "filename": "./api.routes.js",
    "groupTitle": "Computer"
  },
  {
    "type": "Get",
    "url": "/computer/:computerid",
    "title": "ReadComputer",
    "name": "ReadComputer",
    "group": "Computer",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paramName",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    _id : ''\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    ip: '192.168.1.42',\n    name: 'office',\n    _id: ''\n}",
          "type": "type"
        }
      ]
    },
    "filename": "./api.routes.js",
    "groupTitle": "Computer"
  },
  {
    "type": "Put",
    "url": "/computer/:computerid",
    "title": "UpdateComputer",
    "name": "UpdateComputer",
    "group": "Computer",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paramName",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    ip: '192.168.1.42',\n    name: 'office',\n    _id: ''\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    ip: '192.168.1.42',\n    name: 'office',\n    _id: ''\n}",
          "type": "type"
        }
      ]
    },
    "filename": "./api.routes.js",
    "groupTitle": "Computer"
  },
  {
    "type": "Post",
    "url": "/users",
    "title": "CreateUsers",
    "name": "CreateUsers",
    "group": "Users",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paramName",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    email: 'example@email.com',\n    password: '******'\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    email: 'example@email.com',\n    password: '******',\n    _id: ''\n}",
          "type": "type"
        }
      ]
    },
    "filename": "./api.routes.js",
    "groupTitle": "Users"
  },
  {
    "type": "Delete",
    "url": "/users/:Userid",
    "title": "DeleteUser",
    "name": "DeleteUser",
    "group": "Users",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paramName",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    _id: ''\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{}",
          "type": "type"
        }
      ]
    },
    "filename": "./api.routes.js",
    "groupTitle": "Users"
  },
  {
    "type": "Get",
    "url": "/users",
    "title": "ListUsers",
    "name": "ListUsers",
    "group": "Users",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paramName",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    email: 'example@email.com',\n    password: '******',\n    _id: ''\n}]",
          "type": "type"
        }
      ]
    },
    "filename": "./api.routes.js",
    "groupTitle": "Users"
  },
  {
    "type": "Get",
    "url": "/users/:Userid",
    "title": "ReadUser",
    "name": "ReadUser",
    "group": "Users",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paramName",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    _id : ''\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    email: 'example@email.com',\n    password: '******',\n    _id: ''\n}",
          "type": "type"
        }
      ]
    },
    "filename": "./api.routes.js",
    "groupTitle": "Users"
  },
  {
    "type": "Put",
    "url": "/users/:Userid",
    "title": "UpdateUser",
    "name": "UpdateUser",
    "group": "Users",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paramName",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    email: 'example@email.com',\n    password: '******',\n    _id: ''\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "type",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    email: 'example@email.com',\n    password: '******',\n    _id: ''\n}",
          "type": "type"
        }
      ]
    },
    "filename": "./api.routes.js",
    "groupTitle": "Users"
  }
] });
