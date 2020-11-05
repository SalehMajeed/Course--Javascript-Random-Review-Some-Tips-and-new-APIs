function defaults(a = 1, b = 2) {
    console.log(a, b);
}

defaults();
defaults(15);
defaults(15, 14);
defaults(undefined, 14);
