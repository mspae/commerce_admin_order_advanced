const { resolve } = require("path");
const { safeLoad, safeDump } = require("js-yaml");
const { readFileSync, writeFileSync } = require("fs");

// Update the asset type map for a certain asset type
function updateAssetType(assetManifest, librariesAssetTypeMap, fileExtension) {
  return (
    Object.keys(librariesAssetTypeMap)
      .map(key => {
        // @todo regex needs work, way too generic
        const oldIdentifier = key.match(
          new RegExp("(.*)/(.*)\\.(.*)\\." + fileExtension + "$")
        );
        if (!oldIdentifier) {
          return key;
        }
        const fileName = oldIdentifier[2] + "." + fileExtension;

        const [newIdentifier] = Object.keys(assetManifest)
          .filter(key => key === fileName)
          .map(key => {
            return assetManifest[key];
          });

        // If it changed, we return an object so we can use the previous
        // property value in the reduce function.
        return newIdentifier ? { old: key, new: newIdentifier } : key;
      })
      // Turn it back into an object.
      .reduce(function(acc, cur, i) {
        const propVal = librariesAssetTypeMap[cur.old ? cur.old : cur];
        acc[cur.new ? "js/build/" + cur.new : cur] = propVal;
        return acc;
      }, {})
  );
}

// Return updated libraries config
const updateBundleHashes = (assetManifest, librariesConfig) => ({
  ...librariesConfig,
  commerce_admin_order_advanced: {
    ...librariesConfig.commerce_admin_order_advanced, // Filter over the JS keys, check if they are js,
    js: updateAssetType(
      assetManifest,
      librariesConfig.commerce_admin_order_advanced.js,
      "js"
    ),
    css: {
      ...librariesConfig.commerce_admin_order_advanced.css,
      ...(librariesConfig.commerce_admin_order_advanced.css &&
      librariesConfig.commerce_admin_order_advanced.css.theme
        ? {
            theme: updateAssetType(
              assetManifest,
              librariesConfig.commerce_admin_order_advanced.css.theme,
              "css"
            )
          }
        : {})
    }
  }
});

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
