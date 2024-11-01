const cachedDOM = function() {
  const body = document.querySelector("body");
  const content = document.querySelector("#content");
  function getContentContainer() {
    return content;
  }
  function getHTMLBody() {
    return body;
  }
  return { getContentContainer, getHTMLBody };
}();

export default cachedDOM;