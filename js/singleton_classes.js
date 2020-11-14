class Settings {
  constructor() {
    if (Settings.instance instanceof Settings) return Settings.instance;

    this.settitng_object = {
      background: "#ff0000",
      varsion: Math.floor(Math.random() * 4000),
    };

    Object.freeze(this.settitng_object);
    Object.freeze(this);
    Settings.instance = this;
  }

  get(key) {
    return this.settitng_object[key];
  }
}
