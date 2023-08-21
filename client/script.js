fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((users) => {
    const usersCards = users.map((user) => {
      const userCard = document.createElement("div");
      const firstName = document.createElement("p");
      const id = document.createElement("p");
      firstName.textContent = `First Name: ${user.firstName}`;
      id.textContent = `ID: ${user.id}`;

      userCard.append(id, firstName);

      return userCard;
    });

    const container = document.querySelector(".container");
    container.append(...usersCards);
  })
  .catch((error) => {
    console.error(error);
  });
