function openProfileModal() {
    const profiledropdown = document.getElementById('profile-dropdown');
    if (profiledropdown) {
        profiledropdown.classList.toggle('hidden');
    }
}

function viewProfileModal() {
    const viewprofile = document.getElementById('view-profile');
    if (viewprofile) {
        viewprofile.classList.remove('hidden');
    }
}

function closeViewProfileModal() {
    const viewprofile = document.getElementById('view-profile');
    if (viewprofile) {
        viewprofile.classList.add('hidden');
    }
}

function editProfileModal() {
    const editprofile = document.getElementById('edit-profile');
    if (editprofile) {
        editprofile.classList.remove('hidden');
    }
}

function closeEditProfileModal() {
    const editprofile = document.getElementById('edit-profile');
    if (editprofile) {
        editprofile.classList.add('hidden');
    }
}

