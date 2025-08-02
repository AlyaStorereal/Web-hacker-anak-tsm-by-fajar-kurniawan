// Create menu elements
const menuContainer = document.createElement('div');
menuContainer.style.position = 'fixed';
menuContainer.style.top = '20px';
menuContainer.style.left = '20px';
menuContainer.style.zIndex = '9999';

const menuButton = document.createElement('button');
menuButton.textContent = 'MENU HACKER';
menuButton.style.backgroundColor = '#000';
menuButton.style.color = '#0f0';
menuButton.style.border = '1px solid #0f0';
menuButton.style.padding = '10px 15px';
menuButton.style.borderRadius = '5px';
menuButton.style.cursor = 'pointer';
menuButton.style.fontFamily = 'monospace';
menuButton.style.fontWeight = 'bold';

// Create dropdown menu
const dropdownMenu = document.createElement('div');
dropdownMenu.style.display = 'none';
dropdownMenu.style.position = 'absolute';
dropdownMenu.style.top = '40px';
dropdownMenu.style.left = '0';
dropdownMenu.style.backgroundColor = '#111';
dropdownMenu.style.border = '1px solid #0f0';
dropdownMenu.style.borderRadius = '5px';
dropdownMenu.style.padding = '10px';
dropdownMenu.style.minWidth = '200px';

// Create menu item
const menuItem = document.createElement('a');
menuItem.textContent = 'PANEL MURNI';
menuItem.href = 'https://panelmurni.pnl.my.id/alyastoremodecuan/banana/';
menuItem.style.display = 'block';
menuItem.style.color = '#0f0';
menuItem.style.padding = '8px 0';
menuItem.style.textDecoration = 'none';
menuItem.style.fontFamily = 'monospace';
menuItem.target = '_blank';

// Create tooltip text
const tooltip = document.createElement('div');
tooltip.textContent = 'MINTAK AJARIN KE PEMBUAT WEB AJA🐦‍🔥';
tooltip.style.color = '#0f0';
tooltip.style.fontSize = '12px';
tooltip.style.marginTop = '10px';
tooltip.style.borderTop = '1px dashed #0f0';
tooltip.style.paddingTop = '5px';
tooltip.style.fontFamily = 'monospace';

// Assemble the menu
dropdownMenu.appendChild(menuItem);
dropdownMenu.appendChild(tooltip);
menuContainer.appendChild(menuButton);
menuContainer.appendChild(dropdownMenu);
document.body.appendChild(menuContainer);

// Toggle menu visibility
menuButton.addEventListener('click', function() {
    if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    if (!menuContainer.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});
