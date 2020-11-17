const game_settings = { date: "2019-12-30" };
const game_settings_proxy = new Proxy(game_settings, {
  get: (o, property) => {
    return property in o ? o[property] : "hello";
  },
  set: (o, property, value) => {
    if (
      property == "difficulty" &&
      !["easy", "medium", "hard"].includes(value.toLowerCase())
    ) {
      throw new Error("invalid difficulty");
    }
    o[property] = value;
  },
  has: (o, property) => {
    if (property == "difficulty") return false;

    return property in o;
  },
});

console.log(game_settings_proxy.date);
console.log(game_settings_proxy.difficulty);

game_settings_proxy.difficulty = "easy";
console.log(game_settings_proxy.difficulty);

console.log("difficulty" in game_settings_proxy);

game_settings_proxy.difficulty = "super easy";
console.log(game_settings_proxy.difficulty); //  will give an errror.
