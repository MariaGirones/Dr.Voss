<<<<<<< HEAD
function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.querySelector("input[name='name']").value.trim();
  const text = document.querySelector("textarea[name='recommendation']").value.trim();
  const imageInput = document.getElementById("imageInput");
  const file = imageInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      addRecommendation(name, text, e.target.result);
    };
    reader.readAsDataURL(file);
  } else {
    addRecommendation(name, text, null);
  }

  const popup = document.getElementById("popup");
  if (popup) {
    popup.classList.add("show");
  }

  document.querySelector(".recommendation-form").reset();
  return false;
}

function addRecommendation(name, text, imageSrc) {
  const container = document.querySelector(".recommendation-boxes");

  const card = document.createElement("div");
  card.classList.add("dynamic-card");

  const img = document.createElement("img");
  img.src = imageSrc || "https://via.placeholder.com/100";
  img.alt = `${name}'s photo`;

  const span = document.createElement("span");
  span.innerText = `"${text}" - ${name}`;

  card.appendChild(img);
  card.appendChild(span);

  container.prepend(card);
}

function hidePopup() {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.classList.remove("show");
  }
}


>>>>>>> 91c91db605ff673f40ecbdcf65ac0ace8649697f
