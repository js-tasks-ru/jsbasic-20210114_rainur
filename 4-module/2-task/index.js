/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    let str_number=0;
    for(let row of table.rows)
    {
        row.cells[str_number].style.backgroundColor="red"
        str_number++;
    }
}
