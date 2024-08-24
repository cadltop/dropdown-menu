import 'normalize.css';
import './index.css';

const icon = document.querySelector('img');
const menuDiv = document.querySelector('div.menu');

hideMenu();

icon.onclick = showMenu;
menuDiv.onmouseleave = hideMenu;

function hideMenu() {menuDiv.style.display = 'none';}
function showMenu() {menuDiv.style.display = 'flex';}