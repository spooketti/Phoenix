const user_data = [
    { name: "Sri", profile_picture: "images/SriPfp.jpg", age: 15, location: "San Diego" },
    { name: "Soham", profile_picture: "images/SohamPfp.png", age: 15, location: "Ohio" },
    { name: "Bortensen", profile_picture: "images/BortensenPfp.jpg", age: 40, location: "Hawaii" },
    { name: "Sidhi", profile_picture: "images/SidhiPfp.jpg", age: 12, location: "New York" },
    { name: "Gavin", profile_picture: "images/GavinPfp.jpg", age: 15, location: "Paris" }
];

function generateUserProfiles(numProfiles) {
    const userProfiles = [];

    for (let i = 0; i < numProfiles; i++) {
        const randomUser = user_data[Math.floor(Math.random() * user_data.length)];
        userProfiles.push(randomUser);
    }

    return userProfiles;
}

document.addEventListener("DOMContentLoaded", function () {
    const userDetails = document.getElementById("userDetails");
    
    const randomProfiles = generateUserProfiles(1);

    randomProfiles.forEach(profile => {
        const userDiv = document.createElement("div");

        // Create an image element for the profile picture
        const profileImage = document.createElement("img");
        profileImage.src = profile.profile_picture;
        profileImage.alt = profile.name;
        profileImage.style.maxWidth = "100px"; // Adjust the max width as needed

        // Create a div for name and other details
        const detailsDiv = document.createElement("div");
        detailsDiv.innerHTML = `<strong>Name:</strong> ${profile.name}<br><strong>Age:</strong> ${profile.age}<br><strong>Location:</strong> ${profile.location}`;

        // Append the image and details to the userDiv
        userDiv.appendChild(profileImage);
        userDiv.appendChild(detailsDiv);

        userDetails.appendChild(userDiv);
    });
});
