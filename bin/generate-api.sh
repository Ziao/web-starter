#!/bin/bash

openapi-generator generate \
--generator-name typescript-axios \
--output ./src/api \
-i http://localhost:5000/api-json \
--additional-properties=modelPackage=models,apiPackage=api,withSeparateModelsAndApi=true,supportsES6=true,withInterfaces=true

yarn format

# General options
# https://openapi-generator.tech/docs/globals

# Extra options for typescript-axios:
# https://openapi-generator.tech/docs/generators/typescript-axios/
