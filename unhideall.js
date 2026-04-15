// unhide_all.js
for (const name in elements) {
    if (elements[name]) {
        delete elements[name].hidden;
        if (elements[name].showOnlyIfDiscover !== undefined) {
            delete elements[name].showOnlyIfDiscover;
        }
    }
}
