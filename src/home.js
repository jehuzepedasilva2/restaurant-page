 import one from "../imgs/pillar1.png";
 import two from "../imgs/pillar2.png";
 
 export default function homePage() { 
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

  const pillarOne = document.createElement("img");
  pillarOne.classList.add("pillar-one");
  pillarOne.src = one;

  const pillarTwo = document.createElement("img");
  pillarTwo.classList.add("pillar-two");
  pillarTwo.src = two;

  const pillarThree = document.createElement("img");
  pillarThree.classList.add("pillar-three");
  pillarThree.src = one;

  const pillarFour = document.createElement("img");
  pillarFour.classList.add("pillar-four");
  pillarFour.src = two;

  const pillars = [pillarOne, pillarTwo, pillarThree, pillarFour];
  pillars.forEach(p => {
    cachedDOM.getContentContainer().appendChild(p);
  })

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "The Aztecan Kitchen"
  cachedDOM.getContentContainer().appendChild(title);

}