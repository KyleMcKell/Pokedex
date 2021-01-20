export const Namer = (name) => {
	if (name.indexOf("-") === -1) {
		return name;
	} else {
		const splitName = name.split("-");
		if (
			splitName[1].toLowerCase() === "mime" ||
			splitName[1].toLowerCase() === "rime"
		) {
			return `Mr. ${splitName[1].replace(/^\w/, (c) => c.toUpperCase())}`;
		} else if (splitName[1] === "jr") {
			return "Mime Jr.";
		} else if (splitName[1].length === 1) {
			const firstLetter = splitName[1].split("")[0].toUpperCase();
			const newName = `${splitName[0]}-${firstLetter}`;
			return newName;
		} else if (splitName.length >= 2) {
			return splitName[0];
		} else {
			return name;
		}
	}
};
