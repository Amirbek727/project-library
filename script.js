function showLoading() {
  const loadingBar = document.getElementById("loading-bar");
  const formContainer = document.getElementById("form-container");
  const bookForm = document.getElementById("book-form");

  formContainer.style.display = "block";
  loadingBar.style.display = "block";
  bookForm.style.opacity = "0";

  setTimeout(() => {
      loadingBar.style.display = "none";
      bookForm.style.opacity = "1";
  }, 2000);
}

function addBook(event) {
  event.preventDefault();

  const title = document.getElementById("book-title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;
  const status = document.querySelector('input[name="status"]:checked').value;

  const bookList = document.getElementById("book-list");

  const bookCard = document.createElement("div");
  bookCard.className = "book-card";

  bookCard.innerHTML = `
      <h2 class="book-title">"${title}"</h2>
      <p class="book-details">${year} | ${author}</p>
      <p class="book-status">${status}</p>
      <button class="delete-btn" onclick="deleteBook(this)">O'chirish</button>
  `;

  bookList.appendChild(bookCard);

  // Formani tozalash
  document.getElementById("book-form").reset();
  document.getElementById("form-container").style.display = "none";
}

function deleteBook(button) {
  const bookCard = button.parentElement;
  bookCard.remove();
}
zz