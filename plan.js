    // When the page is fully loaded, hide the loading screen and show the content
    document.addEventListener("DOMContentLoaded", function () {
        // Simulate a delay (you can adjust this as needed)
        setTimeout(function () {
            document.getElementById("loading-screen").style.display = "none";

        }, 1000); // 2000 milliseconds (2 seconds) delay in this example
    });

    var selectedBox = null; // To keep track of the currently selected box
    var originalTextColor = '#737373'; // Store the original text color

    function changeColor(box, priceType) {
        if (selectedBox) {
            selectedBox.style.backgroundColor = "#e50914"; // Reset the previously selected box
            selectedBox.style.opacity = 0.6; // Reset the opacity
            var prevPriceType = selectedBox.getAttribute("data-price-type");
            var prevTextElement = document.getElementById("monthly-price-" + prevPriceType);
            prevTextElement.style.color = originalTextColor; // Reset the text color of the previously selected box
            var prevVideoQualityElement = document.getElementById("video-quality-" + prevPriceType);
            prevVideoQualityElement.style.color = originalTextColor; // Reset the text color of the previously selected box
            var prevResolutionElement = document.getElementById("resolution-" + prevPriceType);
            prevResolutionElement.style.color = originalTextColor; // Reset the text color of the previously selected box
            var prevDevicesElement = document.getElementById("devices-" + prevPriceType);
            prevDevicesElement.style.color = originalTextColor; // Reset the text color of the previously selected box
            var prevPhoneElement = document.getElementById("phone-" + prevPriceType);
            prevPhoneElement.style.color = originalTextColor; // Reset the text color of the previously selected box
            var prevDevices2Element = document.getElementById("devices2-" + prevPriceType);
            prevDevices2Element.style.color = originalTextColor; // Reset the text color of the previously selected box
            var prevTabletElement = document.getElementById("tablet-" + prevPriceType);
            prevTabletElement.style.color = originalTextColor; // Reset the text color of the previously selected box
            var prevDevices3Element = document.getElementById("devices3-" + prevPriceType);
            prevDevices3Element.style.color = originalTextColor; // Reset the text color of the previously selected box
            var prevComputerElement = document.getElementById("computer-" + prevPriceType);
            prevComputerElement.style.color = originalTextColor; // Reset the text color of the previously selected box
            var prevDevices4Element = document.getElementById("devices4-" + prevPriceType);
            prevDevices4Element.style.color = originalTextColor; // Reset the text color of the previously selected box
            var prevTvElement = document.getElementById("television-" + prevPriceType);
            prevTvElement.style.color = originalTextColor; // Reset the text color of the previously selected box
            


        }

        box.style.backgroundColor = "#e50914"; // Change the background color of the clicked box to red
        box.style.opacity = 1; // Remove the opacity
        selectedBox = box; // Update the currently selected box
        box.setAttribute("data-price-type", priceType); // Store the price type in a data attribute

        // Update the text color based on the provided price type
        var textElement = document.getElementById("monthly-price-" + priceType);
        textElement.style.color = '#e50914'; // Change the text color to red
        var videoQualityElement = document.getElementById("video-quality-" + priceType);
        videoQualityElement.style.color = '#e50914'; // Change the video quality text color to red
        var resolutionElement = document.getElementById("resolution-" + priceType);
        resolutionElement.style.color = '#e50914'; // Change the video quality text color to red
        var devicesElement = document.getElementById("devices-" + priceType);
        devicesElement.style.color = '#e50914'; // Change the video quality text color to red
        var phoneElement = document.getElementById("phone-" + priceType);
        phoneElement.style.color = '#e50914'; // Change the video quality text color to 
        var devices2Element = document.getElementById("devices2-" + priceType);
        devices2Element.style.color = '#e50914'; // Change the video quality text color to red
        var tabletElement = document.getElementById("tablet-" + priceType);
        tabletElement.style.color = '#e50914'; // Change the video quality text color to red
        var devices3Element = document.getElementById("devices3-" + priceType);
        devices3Element.style.color = '#e50914'; // Change the video quality text color to red
        var computerElement = document.getElementById("computer-" + priceType);
        computerElement.style.color = '#e50914'; // Change the video quality text color to red
        var devices4Element = document.getElementById("devices4-" + priceType);
        devices4Element.style.color = '#e50914'; // Change the video quality text color to red
        var tvElement = document.getElementById("television-" + priceType);
        tvElement.style.color = '#e50914'; // Change the video quality text color to red
        

    };

    