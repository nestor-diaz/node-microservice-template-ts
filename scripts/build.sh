#!/bin/bash

set -e
set -v

# Remove dist directory
rm -rf dist

# Create dist directory
mkdir dist

# Copy assets
cp package.json dist/
cp -r config dist/

# Install production dependencies
npm install --production --prefix dist
