# christmas-calculator

This is just a simple Typescript / Node / Express app. Its one endpoint returns the number of days until Christmas or wishes you a 'Merry Christmas'.

It is intended that this project will run with Nodes experimental strip types

Additionally, I have added an "/about" endpoint that returns package name and version as I find this extremely helpful when verifying deployment information. To support this endpoint I have configured Typescript to allow for JSON imports.

## Release Notes (reverse chronological)

### 1.0.0

Initial endpoint and about endpoint.

### 1.1.0

Adding build, lint & prettier

### 1.2.0

I want the christmas calculator endpoint to be able to accept an arbitraty date (rather than always today), and default to today only if the path param isn't supplied. Note - Express doesn't handle having the root path have an optional path parameter, so I have split out the default endpoint from the arbitrary date endpoint
