// Author: Vo Minh Trung (Mark)

const topMenu = document.getElementById('vmt-top-menu')
const toggleTopMenuIcon = document.getElementById('vmt-toggle-top-menu-icon')

document.addEventListener('click', (e) => {

    // check if the click element is within toggleTopMenuIcon
    if (toggleTopMenuIcon.contains(e.target)) {
        // Click to toggle top menu icon
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('vmt-topMenu-expanded')
    } else {
        // Click outside from toggle top menu icon
        if (topMenu.classList.contains('vmt-topMenu-expanded')) {
            topMenu.classList.add('hidden')
            topMenu.classList.remove('vmt-topMenu-expanded')
        }
    }
})