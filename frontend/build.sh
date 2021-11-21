#!/bin/bash

protoc --plugin="protoc-gen-ts="$(pwd)"\node_modules\.bin\protoc-gen-ts.cmd" --js_out="import_style=commonjs,binary:./src/proto/services" --ts_out="service=grpc-web:./src/proto/services" -I ./src/proto/definitions src/proto/definitions/*.proto