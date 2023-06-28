fetch('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json')
  .then(response => response.json())
  .then(data => {
    // Use the 'data' variable which contains the parsed JSON object
    console.log(data); // Example: logging the data to the console
    console.log("HI")
    // Populate your JavaScript code with the retrieved data here
    // For example, let's assume the JSON structure is an array of objects,
    // and each object has a 'name' property. You can loop through the data and
    // perform any necessary actions.

    data.forEach(item => {
      console.log(item.name); // Example: accessing the 'name' property of each object
      // Perform actions with the data here
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });
