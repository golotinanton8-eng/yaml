{
  "swagger": "2.0",
  "info": {
    "title": "Totally Legit API",
    "description": "[Click here for docs](javascript:alert%28document.domain%29)",
    "version": "1.0"
  },
  "host": "example.com",
  "basePath": "/",
  "schemes": ["https"],
  "paths": {
    "/test": {
      "get": {
        "summary": "Test endpoint",
        "description": "[More info](javascript:alert%28'XSS'%29)",
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    }
  }
}
