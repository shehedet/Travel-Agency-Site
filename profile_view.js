document.getElementById('profile-photo-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('profile-photo-preview').src = e.target.result;
    };

    reader.readAsDataURL(file);
});

document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('firstName', document.getElementById('first-name').value);
    formData.append('lastName', document.getElementById('last-name').value);
    formData.append('contactNumber', document.getElementById('contact-number').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('dateOfBirth', document.getElementById('date-of-birth').value);
    formData.append('city', document.getElementById('city').value);
    formData.append('profilePhoto', document.getElementById('profile-photo-upload').files[0]);

    console.log('Profile Data:', formData);
});