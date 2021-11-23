function fetchData(event) {
  event.preventDefault();

  const login = document.getElementById("login").value;

  fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then((json) => {
      const card = document.getElementById("card");
      card.innerHTML = `
        <img src="${json.avatar_url}">
        <figcaption>
        followers: ${json.followers}
        </figcaption
      `;
    });
}
