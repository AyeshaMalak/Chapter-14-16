sortedScores.sort((a, b) => a - b);
        console.log(sortedScores);

        // 11. Copy elements from cities array to selectedCities array
        let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
        let selectedCities = cities.slice(1, 4); // Copy from index 1 to 3
        console.log(selectedCities);

        // 12. Create a single string from the array using join method
        let arr = ["This", " is", " my", " cat"];
        let sentence = arr.join("");
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
        let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
        document.write("<h2>Phone Manufacturers:</h2>");
        document.write("<select>");
        for (let i = 0; i < manufacturers.length; i++) {
            document.write(`<option>${manufacturers[i]}</option>`);
        }
        document.write("</select>");
