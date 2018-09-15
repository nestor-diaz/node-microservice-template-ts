#!/bin/bash

set -e
set -v

# Copy assets
cp package.json dist/

# Install production dependencies
npm install --production --prefix dist
