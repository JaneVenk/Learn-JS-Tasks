function truncate(str, maxlength) {
    const newSting = (str.length > maxlength) ? str.slice(0, maxlength - 1) + "…" : str;
  return newSting;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));
