scores.sort((a, b) => a - b);
        console.log(scores);

        // 11. Copy elements from cities array to selectedCities array
        let citiesNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
        let selectedCitiesNames = citiesNames.slice(1, 4); // Copy from index 1 to 3
        console.log(selectedCitiesNames);

        // 12. Create a single string from the array using join method
        let array = ["This", " is", " my", " cat"];
        let sentence = array.join("");
        console.log(sentence);

        // 13. Reverse an array (Last In First Out)
        let stack = [];
        stack.push("First");
        stack.push("Second");
        stack.push("Third");

        console.log("Stack in reverse order:");
        while (stack.length > 0) {
            console.log(stack.pop()); // Displays elements in reverse order
        }

        // 14. Store phone manufacturers and display a dropdown menu
        let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
        document.write("<h2>Phone Manufacturers:</h2>");
        document.write("<select>");
        for (let i = 0; i < phoneManufacturers.length; i++) {
            document.write(`<option>${phoneManufacturers[i]}</option>`);
        }
        document.write("</select>");
