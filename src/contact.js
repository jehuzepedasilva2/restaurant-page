import CachedDOM from './cachedDOM.js';
import './contact-styles.css';

function contactPage() {
  const contentContainer = CachedDOM.getContentContainer();

  const ourLocationContainer = document.createElement("div");
  ourLocationContainer.classList.add("location-container");

  const locationTitle = document.createElement("h1");
  locationTitle.classList.add("location-title");
  locationTitle.textContent = 'Our Location';
  ourLocationContainer.appendChild(locationTitle);

  

  contentContainer.appendChild(ourLocationContainer);
}

export default contactPage;