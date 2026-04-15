// unhide_all.js
// Unlocks every hidden element in Sandboxels by removing the
// "hidden" property from all elements in the elements object.
// Install: paste "unhide_all.js" into the Mod Manager, then refresh.

for (const name in elements) {
    if (elements[name] && elements[name].hidden) {
        delete elements[name].hidden;
    }
}
