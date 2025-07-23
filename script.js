function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.querySelector("input[name='name']").value.trim();
  const text = form.querySelector("textarea[name='recommendation']").value.trim();
  const imageInput = form.querySelector("#imageInput");
  const file = imageInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      addRecommendation(name, text, e.target.result);
      showPopup();
      form.reset();
    };
    reader.readAsDataURL(file);
  } else {
    addRecommendation(name, text, null);
    showPopup();
    form.reset();
  }

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
  span.textContent = `"${text}" — ${name}`;

  card.appendChild(img);
  card.appendChild(span);
  container.prepend(card);
}

function showPopup() {
  const popup = document.getElementById("popup");
  if (!popup) return;
  popup.classList.add("active");
  const btn = popup.querySelector("button");
  if (btn) btn.focus();
}

function hidePopup() {
  const popup = document.getElementById("popup");
  if (!popup) return;
  popup.classList.remove("active");
}

// Add event listener for popup close button
document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.querySelector(".popup-content button");
  if (closeBtn) {
    closeBtn.addEventListener("click", hidePopup);
  }
});

