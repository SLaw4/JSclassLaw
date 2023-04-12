import {renderTable} from "./render.js";
import { getTripData, saveTripData } from "./storage.js";
import { trackMPGandCost, calculateAvg, isFormValid, updateDOM } from "./calculateandupdate.js";
/* Global const for updating DOM elements by their id */
const FORM = document.getElementById('form-input');
const ERR = document.getElementById('err');

/* Implement class into mileage program */
class Mileage {
    constructor(miles, gallons, price) {
        this._miles = miles;
        this._gallons = gallons;
        this._price = price;
    }
}

/* MY_DATA is global array that will be updated by the user with objects from form input values and calculate data */
const MY_DATA = getTripData()

renderTable(MY_DATA)

/* Evenlisteners for form submit button, checks validation and if valid saves data as an object into global array name MY_DATA */

FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const miles = parseFloat(e.target.miles.value);
    const gallons = parseFloat(e.target.gallons.value);
    const price = parseFloat(e.target.price.value);
    const isValid = isFormValid(miles, gallons, price);
    if (isValid) {
        ERR.textContent = '';
        
        const dataObj = trackMPGandCost(miles, gallons, price);
        MY_DATA.push(dataObj);
        saveTripData(MY_DATA)
        renderTable(MY_DATA, FORM);
        calculateAvg(MY_DATA);
    }
    FORM.reset();
});
