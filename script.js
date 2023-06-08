
const mobileMenuItemsStyle = document.querySelector('nav>#mobile-menu>#mobile-menu-items').style

document.querySelector('#mobile-menu>img').onclick = () => {
    if(mobileMenuItemsStyle.display !== "block") {
        mobileMenuItemsStyle.display = "block"
    } else {
        mobileMenuItemsStyle.display = "none"
    }
}

document.querySelectorAll('#mobile-menu-items>div').forEach((e) => {
    e.onclick = () => {
        mobileMenuItemsStyle.display = "none"
    }
})
