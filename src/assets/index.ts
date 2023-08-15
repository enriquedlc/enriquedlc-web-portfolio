function importImageFrom(path: string) {
	return require(`${path}`);
}

const logo = importImageFrom("../assets/mainLogo/E-logo.png");
const menu = importImageFrom("../assets/menu/menuCircle.png");
const xmark = importImageFrom("./close/x-mark.png");

export { logo, menu, xmark };
