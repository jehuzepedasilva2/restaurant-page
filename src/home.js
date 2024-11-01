import CachedDOM from "./cachedDOM"; 

export default function homePage() { 
  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "The Aztecan Kitchen"
  CachedDOM.getContentContainer().appendChild(title);

  const description = document.createElement("h2");
  description.classList.add("description");
  description.textContent = `The Aztecan Kitchen is a vibrant and inviting restaurant that brings the rich, 
  authentic flavors of Mexican cuisine to life. Specializing in traditional 
  dishes inspired by Aztec culinary heritage, our menu features freshly made tortillas, 
  sizzling fajitas, savory tamales, and handcrafted salsas, all prepared with time-honored recipes and 
  locally-sourced ingredients. Each meal at The Aztecan Kitchen is a journey through the vibrant culture and bold spices of Mexico, 
  served in a warm, rustic setting that celebrates the spirit of Aztec tradition. Perfect for family gatherings, 
  intimate dinners, or casual dining, The Aztecan Kitchen offers an unforgettable taste of Mexico in every bite.`
  CachedDOM.getContentContainer().appendChild(description);

  const svgContainer = document.createElement('div');
  svgContainer.classList.add("aztec-pyramid")
  svgContainer.innerHTML = `
    <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        width="80px" height="80px" viewBox="0 0 70.096 70.097" xml:space="preserve">
      <g>
        <path d="M70.096,48.21l-0.12-5.318l-4.202-0.622L49.443,22.491l-1.102-0.117v-1.485h-2.594v-3.343l-0.985-0.375l-0.25-0.985
                l-18.188-0.616l-0.862,0.739l-1.608,0.13l-0.253,2.964l-2.838,0.123l0.12,1.364l-1.11,0.122l-2.723,4.827l-2.471,0.122L0,47.204
                l1.02,4.147l30.267-1.226l3.575,4.401l17.183-0.876l-1.424-4.477L70.096,48.21z M31.475,49.161l-0.08-27.122l0.501-0.207
                l2.712,31.162L31.475,49.161z M37.983,24.351h-2.586v-3.424h2.586V24.351z M61.318,42.769l0.116,3.655l-2.279,0.185l-0.062-3.84
                H61.318z M49.508,45.862l-0.12-2.655h2.409l0.065,3.586l-2.047,0.185L49.508,45.862z"/>
      </g>
    </svg>
  `;
  CachedDOM.getContentContainer().appendChild(svgContainer);
}