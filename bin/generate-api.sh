#!/bin/bash

# Generate API
openapi-generator generate \
--generator-name typescript-axios \
--output ./src/api \
-i http://localhost:5000/api-json \
--additional-properties=modelPackage=models,apiPackage=api,withSeparateModelsAndApi=true,supportsES6=true,withInterfaces=true

# Clean up stuff we don't need
rm -rf ./src/api/.openapi-generator
rm -rf ./src/api/git_push.sh
rm -rf ./src/api/.gitignore
rm -rf ./src/api/.npmignore
rm -rf ./src/api/.openapi-generator-ignore

# Format files
yarn format

# General options
# https://openapi-generator.tech/docs/globals

# Extra options for typescript-axios:
# https://openapi-generator.tech/docs/generators/typescript-axios/
