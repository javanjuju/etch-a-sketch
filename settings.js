/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const container = document.querySelector('.container');
const gridContainer = document.querySelector('.grid');
const cells = gridContainer.children;
const cellCount = document.querySelector('#squares').value;
const menu = document.querySelector('.menu');
const clearBtn = document.querySelector('#clear');
const eraserBtn = document.querySelector('#eraser');
const rainbowBtn = document.querySelector('#rainbowMode');

const getColorValue = function () {
	const color = document.querySelector('#color').value;
	console.log(color);
	gridContainer.style.backgroundColor = color;
	return color;
};

const getGridCells = function () {
	gridContainer.style.gridTemplateColumns = `repeat(${cellCount}, 1fr)`;
	gridContainer.style.gridTemplateRows = `repeat(${cellCount}, 1fr)`;
	// eslint-disable-next-line no-unmodified-loop-condition, no-undef
	for (i = 0; i < cellCount ** 2; i++) {
		const cell = document.createElement('div');
		cell.style.outline = 'solid';
		cell.style.backgroundColor = 'white';
		cell.setAttribute('class', 'cells');
		cell.addEventListener('mouseover', () => {
			cell.style.backgroundColor = getColorValue();
		});
		gridContainer.append(cell);
	}
};

const resetOnChange = function () {
	// eslint-disable-next-line no-undef
	for (i = 0; i < cells.length; i++) {
		cells[i].style.backgroundColor = 'white';
	}
};

clearBtn.addEventListener('click', () => {
	for (i = 0; i < cells.length; i++) {
		cells[i].style.backgroundColor = 'white';
	}
});
