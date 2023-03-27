/* Global const for updating DOM elements by their id */
const FORM = document.getElementById('form-input');
const ERR = document.getElementById('err');
const AVG_OUTPUT = document.getElementById('output-avg');
const TBL_OUTPUT = document.getElementById('table-out');

/* MY_DATA is global array that will be updated by the uder with objects from form input values and calculate data */
const MY_DATA = [];

/* updateDOM function takes in input (string value) and id (to dertermine DOM location to update) and create and updates DOM elements */

function updateDOM(input, id) {
    const divEl = document.querySelector(id);
    const p = document.createElement('p');
    p.textContent = input;
    divEl.appendChild(p);
}

/* trackMPGandCost function takes in miles, gallons and price and calculates MPG and tripCost and returns an object */

function trackMPGandCost(miles, gallons, price) {
    const MPG = Math.round(miles / gallons);
    const tripCost = Math.round(gallons * price);
    updateDOM(`Miles per gallon is ${MPG} and trip cost is ${tripCost}`, '#output');
    return {
        miles: miles,
        gallons: gallons,
        price: price,
        MPG: MPG,
        tripCost: tripCost,
    };
}

/* calculateAve function loops over the MY_DATA to determine average MPG and Trip Cost */

function calculateAvg() {
    let sumMPG = 0;
    let sumTripCost = 0;
    MY_DATA.forEach(obj => {
        sumMPG += obj.MPG;
        sumTripCost += obj.tripCost;
    });
    let avgMPG = Math.round(sumMPG / MY_DATA.length);
    let avgTripCost = Math.round(sumTripCost / MY_DATA.length);
    updateDOM(`Average MPG is ${avgMPG}`, '#output-avg');
    updateDOM(`Average trip cost is ${avgTripCost}`, '#output-avg');
}
/* isFormValid takes in miles, gallons, and price and does simple validation and returns boolean or truthy value back to eventlisteners */
function isFormValid(miles, gallons, price) {
    const errMsg = [];
    if (miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Make sure you input value greater than 0');
    }
    if (price > 1000) {
        errMsg.push('Really? I think this is an error...try again');
    }
    if (errMsg.length > 0) {
        ERR.textContent = errMsg;

    } else {
        return true;
    }
}

function renderTableHeadings() {
    const tbl = document.createElement('table');
    const headings = ['Miles Drive:', 'Gallons Used:', 'Price Paid:', 'Trip MPG', 'Trip Cost', 'Edit/Delete'];
    const tr = document.createElement('tr');
    headings.forEach(function (heading) {
        let th = document.createElement('th');
        th.textContent = heading;
        tr.appendChild(th);
    });
    tbl.appendChild(tr);
    return tbl;
}
function renderEditDelBtn(index) {
    const td = document.createElement('td');
    const editBtn = document.createElement('button');
    editBtn.textContent = 'edit';
    const delBtn = document.createElement('button');
    delBtn.textContent = 'delete';
    // add eventlistener 
    // for edit, reference the obj in the array for the current row in the table and populate the form input fields
    editBtn.addEventListener('click', function(e) {
        FORM[0].value = MY_DATA[index].miles
        FORM[1].value = MY_DATA[index].gallons
        FORM[2].value = MY_DATA[index].price
        MY_DATA.splice(index, 1)
    })
    delBtn.addEventListener('click', function(e){
       MY_DATA.splice(index, 1)
       TBL_OUTPUT = ''
    }) 
    td.appendChild(editBtn);
    td.appendChild(delBtn);
    return td;

}
function renderTable() {
    TBL_OUTPUT.innerHTML = '';
    const tbl = renderTableHeadings();
    TBL_OUTPUT.appendChild(tbl);
    MY_DATA.forEach(function (obj, index) {
        const tr = document.createElement('tr');
        for (key in obj) {
            let td = document.createElement('td');
            td.textContent = obj[key];
            tr.appendChild(td);
        }

        const btnTD = renderEditDelBtn(index);
        // const editBtn = document.createElement('button')
        // editBtn.textContent = 'edit'
        // const delBtn = document.createElement('button')
        // delBtn.textContent = 'delete'
        // btnTD.appendChild(editBtn)
        // btnTD.appendChild(delBtn)
        tr.appendChild(btnTD);
        tbl.appendChild(tr);

    });

}

/* Evenlisteners for form submit button, checks validation and if valid saves data as an object into global array name MY_DATA */

FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const miles = parseInt(e.target.miles.value);
    const gallons = parseInt(e.target.gallons.value);
    const price = parseInt(e.target.price.value);
    const isValid = isFormValid(miles, gallons, price);
    if (isValid) {
        ERR.textContent = '';
        AVG_OUTPUT.textContent = '';
        const dataObj = trackMPGandCost(miles, gallons, price);
        MY_DATA.push(dataObj);
        renderTable();
        calculateAvg();
    }
    FORM.reset();
});
