function get_user_defined_settings() {
  return {
    difficulty: "easy",
    starting_cash: 0,
  };
}

const cash = get_user_defined_settings().starting_cash ?? 500;

console.log(cash);
