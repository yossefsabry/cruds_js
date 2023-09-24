<h2 align="center"> cruds app js || yossef </h2>

### Description

📦 This code provides a product management system with a user-friendly web interface. It allows users to create, update, and delete product entries, as well as search for specific products based on title or category.

✏️ The input fields in the interface allow users to enter information such as the product title, price, taxes, ads, discount, count, and category. The system calculates the total price for each product based on the entered values.

💾 The product data is stored in the browser's local storage for persistence. Existing data is retrieved from the local storage when the system is loaded, and any updates or new entries are saved back to the local storage.

🔍 Users can search for products by entering keywords in the search input field. They can choose to search by title or category using the provided buttons. The search functionality filters the product data and displays the matching results in a table.

🔄 The interface dynamically updates the table to reflect any changes made to the product data. Users can update or delete individual products by clicking the corresponding buttons in the table. The system also provides an option to delete all product entries with a single click.

This product management system aims to simplify the process of managing product information, making it easier for users to keep track of their inventory and make informed decisions.

To get started, simply open the index.html file in a web browser and start managing your products efficiently! 🚀


### 📋 Features and Elements in the Code:

The script starts by defining variables and event listeners for various input fields, such as title ✏️, price 💰, taxes 📝, ads 📢, discount 💸, total 💯, count 🔢, and category 🗂️. These fields are used to collect information about a product.

The checkTotal function is called whenever the values in the price, taxes, ads, or discount fields are changed. It calculates the total price for the product and updates the total field accordingly.

The script initializes an empty array called dataPro and checks if there is any data stored in the local storage. If data is found, it is parsed and stored in the dataPro array. Otherwise, the array remains empty.

When the submit button is clicked or the enter key is pressed, the collectData function is called. It collects the values from the input fields and creates a new product object. If the mood is set to "create", the new product is added to the dataPro array. If the mood is set to "update", the new product replaces the existing product at the specified index in the dataPro array. The collectData function also saves the dataPro array to the local storage and clears the input fields.

The showData function is responsible for displaying the product data in a table. It iterates over the dataPro array and generates HTML rows with the product information. It also includes buttons for updating and deleting each product entry. The table is then inserted into the HTML document.

The deleteRow function is called when the delete button is clicked for a specific product. It removes the corresponding product from the dataPro array, saves the updated array to the local storage, and refreshes the table.

The deleteAll function is called when the delete all button is clicked. It clears the local storage and empties the dataPro array, effectively deleting all product entries. The table is then refreshed.

The updateData function is called when the update button is clicked for a specific product. It populates the input fields with the existing product data and changes the mood to "update". When the update is submitted, the collectData function will update the existing product instead of creating a new one.

The search functionality allows users to search for products based on either title ✏️ or category 🗂️. The search mode can be switched using the title and category search buttons. The searchData function is called when the search input is changed. It filters the dataPro array based on the search value and updates the table to display the filtered results.

Overall, this code enables users to manage product data through a web interface by creating, updating, and deleting product entries. They can also search for products based on specific criteria. 💪🌐


### Email:
```
yossefsabry66@gmail.com
```