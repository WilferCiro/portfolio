
export const animContainer = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2
		}
	}
};
  
export const animItem = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1
	}
};

export const rotateItem = {
	hidden: { opacity: 0, scale: 0 },
	visible: {	opacity: 1, rotate: 360, scale: 1 }
};