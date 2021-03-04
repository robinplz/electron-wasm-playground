emcc src/cpp/main.cpp -o core.js --no-entry -s EXPORTED_FUNCTIONS='["_readFile"]' -s EXPORTED_RUNTIME_METHODS='["cwrap"]' -s MODULARIZE=1 -lnodefs.js
cp -f ./core.wasm out/website/