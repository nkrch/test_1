if (!localStorage.getItem("theme01050403")) {
  localStorage.setItem("theme01050403", "light");
} else {
  if (localStorage.getItem("theme01050403") == "light") {
    theme = "dark";
    changeTheme(localStorage.getItem("theme01050403"));
  } else {
    theme = "light";
    changeTheme(localStorage.getItem("theme01050403"));
  }
}
