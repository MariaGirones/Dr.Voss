function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.querySelector("input[name='name']").value.trim();
  const text = document.querySelector("textarea[name='recommendation']").value.trim();
  const imageInput = document.getElementById("imageInput");
  const file = imageInput.files[0];

  // Read image as Data URL (base64) if available
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      addRecommendation(name, text, e.target.result);
    };
    reader.readAsDataURL(file);
  } else {
    // No image uploaded
    addRecommendation(name, text, null);
  }

  // Show popup and reset form
  const popup = document.getElementById("popup");
  if (popup) {
    popup.style.display = "block";
  }

  document.querySelector(".recommendation-form").reset();
  return false;
}

function addRecommendation(name, text, imageSrc) {
  const container = document.querySelector(".recommendation-boxes");

  const card = document.createElement("div");

  const img = document.createElement("img");
  img.src = imageSrc || "https://via.placeholder.com/100"; // default if no image
  img.alt = `${name}'s photo`;

  const span = document.createElement("span");
  span.innerText = `"${text}" - ${name}`;

  card.appendChild(img);
  card.appendChild(span);

  container.prepend(card); // Add newest recommendation on top
}

function hidePopup() {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.style.display = "none";
  }
}

