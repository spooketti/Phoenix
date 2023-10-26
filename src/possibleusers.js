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
    const generateUserButton = document.getElementById("generateUserButton");
    const userDetails = document.getElementById("userDetails");

    generateUserButton.addEventListener("click", function () {
        userDetails.innerHTML = ''; 

        const randomProfiles = generateUserProfiles(1);

        randomProfiles.forEach(profile => {
            const userDiv = document.createElement("div");
            userDiv.innerHTML = `<strong>Name:</strong> ${profile.name}<br><strong>Age:</strong> ${profile.age}<br><strong>Location:</strong> ${profile.location}`;
            userDetails.appendChild(userDiv);
        });
    });
});
