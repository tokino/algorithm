const map = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
];

function renderMap(start, goal) {
    const content = document.querySelector('#content');

    const rowFragment = document.createDocumentFragment();
    map.forEach((rowData, rowIndex) => {
        const fragment = document.createDocumentFragment();

        rowData.forEach((value, index) => {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (rowIndex === start[0] && index === start[1]) {
                cell.textContent = 'S';
            }
            if (rowIndex === goal[0] && index === goal[1]) {
                cell.textContent = 'G';
            }

            switch (value) {
                case 0:
                    cell.classList.add('wall');
                    break;
                default:
                    break;
            }

            fragment.appendChild(cell);
        });

        const row = document.createElement('div');
        row.classList.add('row')
        row.appendChild(fragment);
        rowFragment.appendChild(row);
    });

    content.appendChild(rowFragment);
}

(() => {
    const start = [1,1];
    const goal = [8,8];

    renderMap(start, goal);

})();