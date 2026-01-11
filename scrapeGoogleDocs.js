/**
    Simply scraping the google doc the "brute force" way rather than calling on the google docs API was chosen because the js google docs API has attrocious documentation and would also require authentication, something I decided to try and avoid since the document we are accessing is rather simple
    @author Ivan Rosyaykin <evanmico222@gmail.com>
    @requires jsdom
**/
import { JSDOM, VirtualConsole } from "jsdom"; // used to scrape the google docs document

const url =
    "https://docs.google.com/document/d/e/2PACX-1vRPzbNQcx5UriHSbZ-9vmsTow_R6RRe7eyAU60xIF9Dlz-vaHiHNO2TKgDi7jy4ZpTpNqM7EvEcfr_p/pub";

/**
 *
 * @param {string} url
 * @returns {void}
 */
const printSecretMessage = async (url) => {
    try {
        const response = await fetch(url); // uses fetch API to get the html
        if (!response.ok) {
            // check if we got a response
            throw new Error(`Response status: ${response}`);
        }
        // initializes a document with a traversable DOM using JSDOM constructor
        const virtualConsole = new VirtualConsole(); // solely done to hide "Could not parse CSS stylesheet" error of JSDOM from console
        const responseDocument = new JSDOM(await response.text(), {
            contentType: "text/html",
            virtualConsole, // sends console output to this virtual/fake one rather than the standard one.
        }).window.document.body;

        const table = responseDocument.querySelector("tbody"); // selects the first table in page
        const rows = table.querySelectorAll("tr"); // selects all of the rows in the table
        const characterArray = new Array(rows.length - 1); // array intialized with a length -1 of the table (to avoid table header)
        let pRows = 0; // start tracking amount of rows for print with 0
        let pCols = 0; // start tracking amount of cols for print with 0

        // build an array of characters with the [x, char, y] at each index to be used later
        for (let i = 0; i < rows.length - 1; i++) {
            const cells = rows[i + 1].querySelectorAll("span");
            //characterArray.push([]);
            characterArray[i] = new Array(cells.length);
            for (let j = 0; j < cells.length; j++) {
                if (j === 0 && Number(cells[j].textContent) > pCols) {
                    // track total columns by setting pCols to the maximum found x coordinate in table
                    pCols = Number(cells[j].textContent);
                }
                if (j === 2 && Number(cells[j].textContent) > pRows) {
                    // track total rows by setting pRows to the maximum found y coordinate in table
                    pRows = Number(cells[j].textContent);
                }
                characterArray[i][j] = cells[j].textContent;
                /*
                console.log(
                    `i: ${i}\tj: ${j}\tcellText: ${cells[j].textContent}`
                );
                */
            }
        }
        //console.log(`pRows: ${pRows}\tpCols: ${pCols}`);
        const printArray = new Array(pRows + 1); // initialize print array with same amount of rows as max y-coordinate + 1
        for (let i = 0; i < printArray.length; i++) {
            // initialize array at each row with same amount of cols as max x-coordinate + 1 and fill with default space for empty values
            printArray[i] = new Array(pCols + 1).fill(" ");
        }
        for (let i = 0; i < characterArray.length; i++) {
            //console.log(characterArray[i]);
            // get x(row) and y(column) at which to put the character pulled from google doc
            const x = Number(characterArray[i][2]);
            const y = Number(characterArray[i][0]);
            printArray[x][y] = characterArray[i][1]; // place character in printArray in appropriate spot
            //console.log(printArray[x]);
        }
        // iterate through printArray in reverse order and print each line to get correct orientation
        for (let i = printArray.length - 1; i >= 0; i--) {
            console.log(printArray[i].join("")); // simply join each row of printArray and print the entire row by row
        }
    } catch (error) {
        console.error(error.message);
    }
};

printSecretMessage(url);
