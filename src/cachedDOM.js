const cachedDOM = function() {
  const body = document.querySelector("body");
  const content = document.querySelector("#content");
  const nav = document.querySelector("nav");
  function getContentContainer() {
    return content;
  }
  function getHTMLBody() {
    return body;
  }
  function getNav() {
    return nav;
  }
  return { getContentContainer, getHTMLBody, getNav };
}();

export default cachedDOM;