// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build a function to create a table
function buildTable(data) {
    // First clear any existing date
    tbody.html("");
    // loop through each object and append a row and cells for each value in the roww
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
    );
    });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {
        console.log(this);

// 4a. Save the element that was changed as a variable.
var changedElement = d3.select(this);
    console.log(changedElement);
    
 // 4b. Save the value that was changed as a variable.
let elementValue = changedElement.property("value");
    console.log("This is elementValue");
    console.log(elementValue);

// 4c. Save the id of the filter that was changed as a variable.
let filterId = changedElement.attr("id");
    console.log("This is filterId");    
    console.log(filterId);
    console.log("This is filters");
    console.log(filters);
// 5. If a filter value was entered then add that filterId and value
// to the filters list. Otherwise, clear that filter from the filters object.
if (elementValue) {
    filters[filterId] = elementValue;
// }
// else {
//     delete filters[filterId];
    console.log("This is Step 5"); 
    console.log(changedElement);
    console.log(filters)
}


 // 6. Call function to apply all filters and rebuild the table
filterTable();
  
}

// 7. Use this function to filter the table when data is entered.
function filterTable() {
    
//  8. Set the filtered data to the tableData.
// filteredDate is for a start filled with the whole original data set tableData
    let filteredData = tableData;
    console.log("This is the whole filteredData")
    console.log(tableData);
// 9. Loop through all of the filters and keep any data that
//    matches the filter values

// for (const input in filters) {
//     console.log("This is the for loop")
//     console.log(filters[input]);
//     console.log(input);
//     if (input) {
//         filteredData = filteredData.filter(row => row.input === filters[input]);
//    }
//   }
//   console.log("Print filteredData")
//   console.log(filteredData)


  Object.entries(filters).forEach((filter) => {
    console.log("This is within Object.entries")
    console.log(filter)
    console.log(filteredData);
    console.log(filteredData.filter(row => row.city === 'benton'))
    filteredData = filteredData.filter(row => row[filter[0]] === filter[1]);
    console.log("Print filteredData");
    console.log(filteredData);
  
  })







//   Object.entries(filters).forEach((filter) => {
//     console.log(filter)
//     console.log(filter[1])
//     filteredData = filteredData.filter(row => row.filter[0] === filter[1]);
//     console.log("Print filteredData");
//     console.log(filteredData);
  
//   })




  //   for (const input in filters) {
//     console.log("This is the for loop")
//     console.log(filters[input]);
//     if (input) {
//         filteredData = filteredData.filter(row => row.input === input);
//         console.log("Print filterValue");
//         console.log(input);
//     }
//   }
// 10. Finally, rebuild the table using the filtered data
buildTable(filteredData);
    console.log("Run step buildTable")
}


// data.forEach((weatherReport) => {
//     let row = tbody.append("tr");
//     Object.entries(weatherReport).forEach(([key, value]) => {
//       let cell = row.append("td");
//       cell.text(value);
//     });
//   });


// if (date) {
//     filteredData = filteredData.filter(row => row.datetime === date);
// }
  


  
//   // 2. Attach an event to listen for changes to each filter
//   // Was filter-btn, changes to 
   d3.selectAll("input").on("change", updateFilters);


//   Build the table when the page loads
   buildTable(tableData);




