const { resolve } = require("path");
const { safeLoad, safeDump } = require("js-yaml");
const { readFileSync, writeFileSync } = require("fs");

const onlyJs = key => /\.js$/.test(key);

// Return updated libraries config
function updateBundleHashes(assetManifest, librariesConfig) {
  let updatedLibrariesConfig = { ...librariesConfig };
  return {
    ...librariesConfig,
    commerce_admin_order_advanced: {
      ...librariesConfig.commerce_admin_order_advanced,
      // Filter over the JS keys, check if they are js,
      js: Object.keys(librariesConfig.commerce_admin_order_advanced.js)
        .map(key => {
          // @todo regex needs work, way too generic
          const oldIdentifier = key.match(/(.*)\/(.*)\.(.*)\.js$/);
          if (!oldIdentifier) {
            return key;
          }
          const fileName = oldIdentifier[2] + ".js";

          const [newIdentifier] = Object.keys(assetManifest)
            .filter(key => key === fileName)
            .map(key => {
              return assetManifest[key];
            });

          // If it changed, we return an object so we can use the previous
          // property value in the reduce function.
          return newIdentifier
            ? {
                old: key,
                new: newIdentifier
              }
            : key;
        })
        // Turn it back into an object.
        .reduce(function(acc, cur, i) {
          const propVal =
            librariesConfig.commerce_admin_order_advanced.js[
              cur.old ? cur.old : cur
            ];
          acc[cur.new ? cur.new : cur] = propVal;
          return acc;
        }, {})
    }
  };
}

function updateLibrariesYamlFile() {
  const assetManifest = require(resolve(
    __dirname,
    "..",
    "build",
    "asset-manifest"
  ));
  const librariesYamlPath = resolve(
    __dirname,
    "..",
    "..",
    "commerce_admin_order_advanced.libraries.yml"
  );
  const librariesYaml = readFileSync(librariesYamlPath, "utf8");
  const librariesConfig = safeLoad(librariesYaml);

  const updatedLibrariesConfig = updateBundleHashes(
    assetManifest,
    librariesConfig
  );
  const updatedLibrariesYaml = safeDump(updatedLibrariesConfig);

  writeFileSync(librariesYamlPath, updatedLibrariesYaml);
}

updateLibrariesYamlFile();
