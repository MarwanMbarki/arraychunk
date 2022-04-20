// Initialise an array with some data
var data = [1,2,3,4,5]
, chunk
// Initialise to how many chunks you want your array
var n = 2;
// Process function to process the array to Chunks of two's
function processArray(data) {
    // Loop through the array
   while (data.length > 0) {
       chunk = data.splice(0,n)
       console.log(chunk)
   }
}
// Call the Function to display some data on the console.
processArray(data);
