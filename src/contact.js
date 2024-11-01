import CachedDOM from './cachedDOM.js';
import './contact-styles.css';

function contactPage() {
  const contentContainer = CachedDOM.getContentContainer();

  const locationTitle = document.createElement("h1");
  locationTitle.classList.add("location-title");
  locationTitle.textContent = 'Our Location';
  contentContainer.appendChild(locationTitle);

  const ourLocationContainer = document.createElement("div");
  ourLocationContainer.classList.add("location-container");

  const locationAddress = document.createElement("h3");
  locationAddress.classList.add("location-address");
  locationAddress.innerHTML = "777 Lucky Street<br>San Francisco, CA 94107";

  const phoneNumber = document.createElement("h3");
  phoneNumber.classList.add("phone-number");
  phoneNumber.innerHTML = "Phone Number:<br>(777) 777-7777";

  const hours = document.createElement("p");
  hours.classList.add("hours");
  hours.innerHTML = `
  Hours:<br>
  Sunday - Monday: Closed<br>
  Tuesday - Wednesday: 7:00 pm - 9:00 pm<br>
  Thursday - Friday: 11:00 am - 2:30 pm<br>
  4:00 pm - 9:00 pm<br>
  Saturday: 4:00 pm - 9:00 pm`;

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("map-image-container");
  imageDiv.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3153.45055927711!2d-122.4091878682823!3d37.77947947991714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1730443997109!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  ourLocationContainer.appendChild(locationAddress);
  ourLocationContainer.appendChild(phoneNumber);
  ourLocationContainer.appendChild(hours);
  ourLocationContainer.appendChild(imageDiv);

  contentContainer.appendChild(ourLocationContainer);
}

export default contactPage;