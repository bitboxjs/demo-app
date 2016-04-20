SystemJS.config({
    transpiler: "plugin-babel",
    packages: {
        "demo": {
            "main": "index.box",
            "meta": {
                "*.box": {
                    "loader": "plugin-bitbox"
                },
                "*.js": {
                    "loader": "plugin-babel"
                }
            }
        }
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {
        "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
        "bitbox": "npm:bitbox@1.0.25",
        "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
        "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
        "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
        "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
        "events": "github:jspm/nodelibs-events@0.2.0-alpha",
        "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
        "http": "github:jspm/nodelibs-http@0.2.0-alpha",
        "net": "github:jspm/nodelibs-net@0.2.0-alpha",
        "os": "github:jspm/nodelibs-os@0.2.0-alpha",
        "path": "github:jspm/nodelibs-path@0.2.0-alpha",
        "plugin-babel": "npm:systemjs-plugin-babel@0.0.9",
        "plugin-bitbox": "npm:bitbox-systemjs-plugin@1.0.1",
        "process": "github:jspm/nodelibs-process@0.2.0-alpha",
        "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
        "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
        "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.5.7",
        "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
        "url": "github:jspm/nodelibs-url@0.2.0-alpha",
        "util": "github:jspm/nodelibs-util@0.2.0-alpha",
        "vm": "github:jspm/nodelibs-vm@0.2.0-alpha"
    },
    packages: {
        "github:capaj/systemjs-hot-reloader@0.5.7": {
            "map": {
                "debug": "npm:debug@2.2.0",
                "socket.io-client": "github:socketio/socket.io-client@1.4.5",
                "weakee": "npm:weakee@1.0.0"
            }
        },
        "github:jspm/nodelibs-buffer@0.2.0-alpha": {
            "map": {
                "buffer-browserify": "npm:buffer@4.5.1"
            }
        },
        "github:jspm/nodelibs-crypto@0.2.0-alpha": {
            "map": {
                "crypto-browserify": "npm:crypto-browserify@3.11.0"
            }
        },
        "github:jspm/nodelibs-http@0.2.0-alpha": {
            "map": {
                "http-browserify": "npm:stream-http@2.2.1"
            }
        },
        "github:jspm/nodelibs-os@0.2.0-alpha": {
            "map": {
                "os-browserify": "npm:os-browserify@0.2.1"
            }
        },
        "github:jspm/nodelibs-stream@0.2.0-alpha": {
            "map": {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
            "map": {
                "string_decoder-browserify": "npm:string_decoder@0.10.31"
            }
        },
        "github:jspm/nodelibs-url@0.2.0-alpha": {
            "map": {
                "url-browserify": "npm:url@0.11.0"
            }
        },
        "npm:asn1.js@4.5.2": {
            "map": {
                "bn.js": "npm:bn.js@4.11.3",
                "inherits": "npm:inherits@2.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:baobab@2.3.3": {
            "map": {
                "emmett": "npm:emmett@3.1.1"
            }
        },
        "npm:bitbox-compiler@1.0.4": {
            "map": {
                "js-beautify": "npm:js-beautify@1.6.2"
            }
        },
        "npm:bitbox-systemjs-plugin@1.0.1": {
            "map": {
                "bitbox-compiler": "npm:bitbox-compiler@1.0.4"
            }
        },
        "npm:bitbox@1.0.25": {
            "map": {
                "cerebral": "npm:cerebral@0.33.33",
                "cerebral-model-baobab": "npm:cerebral-model-baobab@0.4.8",
                "deepmerge": "npm:deepmerge@0.2.10",
                "exenv": "npm:exenv@1.2.1",
                "snabbdom": "npm:snabbdom@0.4.2",
                "snabbdom-to-html": "npm:snabbdom-to-html@2.1.3"
            }
        },
        "npm:browserify-aes@1.0.6": {
            "map": {
                "buffer-xor": "npm:buffer-xor@1.0.3",
                "cipher-base": "npm:cipher-base@1.0.2",
                "create-hash": "npm:create-hash@1.1.2",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:browserify-cipher@1.0.0": {
            "map": {
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "browserify-des": "npm:browserify-des@1.0.0",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
            }
        },
        "npm:browserify-des@1.0.0": {
            "map": {
                "cipher-base": "npm:cipher-base@1.0.2",
                "des.js": "npm:des.js@1.0.0",
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:browserify-rsa@4.0.1": {
            "map": {
                "bn.js": "npm:bn.js@4.11.3",
                "randombytes": "npm:randombytes@2.0.3"
            }
        },
        "npm:browserify-sign@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.3",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "create-hash": "npm:create-hash@1.1.2",
                "create-hmac": "npm:create-hmac@1.1.4",
                "elliptic": "npm:elliptic@6.2.3",
                "inherits": "npm:inherits@2.0.1",
                "parse-asn1": "npm:parse-asn1@5.0.0"
            }
        },
        "npm:buffer@4.5.1": {
            "map": {
                "base64-js": "npm:base64-js@1.1.2",
                "ieee754": "npm:ieee754@1.1.6",
                "isarray": "npm:isarray@1.0.0"
            }
        },
        "npm:cerebral-model-baobab@0.4.8": {
            "map": {
                "baobab": "npm:baobab@2.3.3"
            }
        },
        "npm:cerebral@0.33.33": {
            "map": {
                "lodash": "npm:lodash@4.11.1"
            }
        },
        "npm:cipher-base@1.0.2": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:config-chain@1.1.10": {
            "map": {
                "ini": "npm:ini@1.3.4",
                "proto-list": "npm:proto-list@1.2.4"
            }
        },
        "npm:create-ecdh@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.3",
                "elliptic": "npm:elliptic@6.2.3"
            }
        },
        "npm:create-hash@1.1.2": {
            "map": {
                "cipher-base": "npm:cipher-base@1.0.2",
                "inherits": "npm:inherits@2.0.1",
                "ripemd160": "npm:ripemd160@1.0.1",
                "sha.js": "npm:sha.js@2.4.5"
            }
        },
        "npm:create-hmac@1.1.4": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2",
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:crypto-browserify@3.11.0": {
            "map": {
                "browserify-cipher": "npm:browserify-cipher@1.0.0",
                "browserify-sign": "npm:browserify-sign@4.0.0",
                "create-ecdh": "npm:create-ecdh@4.0.0",
                "create-hash": "npm:create-hash@1.1.2",
                "create-hmac": "npm:create-hmac@1.1.4",
                "diffie-hellman": "npm:diffie-hellman@5.0.2",
                "inherits": "npm:inherits@2.0.1",
                "pbkdf2": "npm:pbkdf2@3.0.4",
                "public-encrypt": "npm:public-encrypt@4.0.0",
                "randombytes": "npm:randombytes@2.0.3"
            }
        },
        "npm:debug@2.2.0": {
            "map": {
                "ms": "npm:ms@0.7.1"
            }
        },
        "npm:des.js@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:diffie-hellman@5.0.2": {
            "map": {
                "bn.js": "npm:bn.js@4.11.3",
                "miller-rabin": "npm:miller-rabin@4.0.0",
                "randombytes": "npm:randombytes@2.0.3"
            }
        },
        "npm:elliptic@6.2.3": {
            "map": {
                "bn.js": "npm:bn.js@4.11.3",
                "brorand": "npm:brorand@1.0.5",
                "hash.js": "npm:hash.js@1.0.3",
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:evp_bytestokey@1.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2"
            }
        },
        "npm:falafel@1.2.0": {
            "map": {
                "acorn": "npm:acorn@1.2.2",
                "foreach": "npm:foreach@2.0.5",
                "isarray": "npm:isarray@0.0.1",
                "object-keys": "npm:object-keys@1.0.9"
            }
        },
        "npm:hash.js@1.0.3": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:inline-process-browser@2.0.1": {
            "map": {
                "falafel": "npm:falafel@1.2.0",
                "through2": "npm:through2@0.6.5"
            }
        },
        "npm:js-beautify@1.6.2": {
            "map": {
                "config-chain": "npm:config-chain@1.1.10",
                "mkdirp": "npm:mkdirp@0.5.1",
                "nopt": "npm:nopt@3.0.6"
            }
        },
        "npm:lodash._baseflatten@3.1.4": {
            "map": {
                "lodash.isarguments": "npm:lodash.isarguments@3.0.8",
                "lodash.isarray": "npm:lodash.isarray@3.0.4"
            }
        },
        "npm:lodash._baseuniq@3.0.3": {
            "map": {
                "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
                "lodash._cacheindexof": "npm:lodash._cacheindexof@3.0.2",
                "lodash._createcache": "npm:lodash._createcache@3.1.2"
            }
        },
        "npm:lodash._createcache@3.1.2": {
            "map": {
                "lodash._getnative": "npm:lodash._getnative@3.9.1"
            }
        },
        "npm:lodash.deburr@3.2.0": {
            "map": {
                "lodash._root": "npm:lodash._root@3.0.1"
            }
        },
        "npm:lodash.escape@3.2.0": {
            "map": {
                "lodash._root": "npm:lodash._root@3.0.1"
            }
        },
        "npm:lodash.forown@3.0.2": {
            "map": {
                "lodash._basefor": "npm:lodash._basefor@3.0.3",
                "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
                "lodash.keys": "npm:lodash.keys@3.1.2"
            }
        },
        "npm:lodash.kebabcase@3.1.1": {
            "map": {
                "lodash.deburr": "npm:lodash.deburr@3.2.0",
                "lodash.words": "npm:lodash.words@3.2.0"
            }
        },
        "npm:lodash.keys@3.1.2": {
            "map": {
                "lodash._getnative": "npm:lodash._getnative@3.9.1",
                "lodash.isarguments": "npm:lodash.isarguments@3.0.8",
                "lodash.isarray": "npm:lodash.isarray@3.0.4"
            }
        },
        "npm:lodash.union@3.1.0": {
            "map": {
                "lodash._baseflatten": "npm:lodash._baseflatten@3.1.4",
                "lodash._baseuniq": "npm:lodash._baseuniq@3.0.3",
                "lodash.restparam": "npm:lodash.restparam@3.6.1"
            }
        },
        "npm:lodash.words@3.2.0": {
            "map": {
                "lodash._root": "npm:lodash._root@3.0.1"
            }
        },
        "npm:miller-rabin@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.3",
                "brorand": "npm:brorand@1.0.5"
            }
        },
        "npm:mkdirp@0.5.1": {
            "map": {
                "minimist": "npm:minimist@0.0.8"
            }
        },
        "npm:nopt@3.0.6": {
            "map": {
                "abbrev": "npm:abbrev@1.0.7"
            }
        },
        "npm:parse-asn1@5.0.0": {
            "map": {
                "asn1.js": "npm:asn1.js@4.5.2",
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "create-hash": "npm:create-hash@1.1.2",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "pbkdf2": "npm:pbkdf2@3.0.4"
            }
        },
        "npm:pbkdf2@3.0.4": {
            "map": {
                "create-hmac": "npm:create-hmac@1.1.4"
            }
        },
        "npm:public-encrypt@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.11.3",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "create-hash": "npm:create-hash@1.1.2",
                "parse-asn1": "npm:parse-asn1@5.0.0",
                "randombytes": "npm:randombytes@2.0.3"
            }
        },
        "npm:readable-stream@1.0.34": {
            "map": {
                "core-util-is": "npm:core-util-is@1.0.2",
                "inherits": "npm:inherits@2.0.1",
                "isarray": "npm:isarray@0.0.1",
                "stream-browserify": "npm:stream-browserify@1.0.0",
                "string_decoder": "npm:string_decoder@0.10.31"
            }
        },
        "npm:readable-stream@2.1.0": {
            "map": {
                "core-util-is": "npm:core-util-is@1.0.2",
                "inherits": "npm:inherits@2.0.1",
                "inline-process-browser": "npm:inline-process-browser@2.0.1",
                "isarray": "npm:isarray@1.0.0",
                "process-nextick-args": "npm:process-nextick-args@1.0.6",
                "string_decoder": "npm:string_decoder@0.10.31",
                "unreachable-branch-transform": "npm:unreachable-branch-transform@0.5.1",
                "util-deprecate": "npm:util-deprecate@1.0.2"
            }
        },
        "npm:recast@0.11.5": {
            "map": {
                "ast-types": "npm:ast-types@0.8.16",
                "esprima": "npm:esprima@2.7.2",
                "private": "npm:private@0.1.6",
                "source-map": "npm:source-map@0.5.3"
            }
        },
        "npm:sha.js@2.4.5": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:snabbdom-to-html@2.1.3": {
            "map": {
                "browser-split": "npm:browser-split@0.0.1",
                "lodash.escape": "npm:lodash.escape@3.2.0",
                "lodash.forown": "npm:lodash.forown@3.0.2",
                "lodash.kebabcase": "npm:lodash.kebabcase@3.1.1",
                "lodash.union": "npm:lodash.union@3.1.0"
            }
        },
        "npm:stream-browserify@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "readable-stream": "npm:readable-stream@1.0.34"
            }
        },
        "npm:stream-browserify@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "readable-stream": "npm:readable-stream@2.1.0"
            }
        },
        "npm:stream-http@2.2.1": {
            "map": {
                "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
                "inherits": "npm:inherits@2.0.1",
                "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
                "xtend": "npm:xtend@4.0.1"
            }
        },
        "npm:through2@0.6.5": {
            "map": {
                "readable-stream": "npm:readable-stream@1.0.34",
                "xtend": "npm:xtend@4.0.1"
            }
        },
        "npm:unreachable-branch-transform@0.5.1": {
            "map": {
                "esmangle-evaluator": "npm:esmangle-evaluator@1.0.0",
                "recast": "npm:recast@0.11.5"
            }
        },
        "npm:url@0.11.0": {
            "map": {
                "punycode": "npm:punycode@1.3.2",
                "querystring": "npm:querystring@0.2.0"
            }
        }
    }
});
