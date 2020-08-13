/**自动化 */
const Components = [];
const files = require.context("../../views/", true, /\.js$/);
files.keys().map(key => {
    if (key.includes("./Index") || key.includes("./Login")) {
        return false
    }
    const jsonObj = {};
    const splitFilesName = key.split(".");
    const path = `/index${splitFilesName[1].toLowerCase()}`;
    const component = files(key).default;
    jsonObj.path = path;
    jsonObj.component = component;
    Components.push(jsonObj);
})
export default Components;