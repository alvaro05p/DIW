var enlaceMenu;

function iniciarMenu() 
{
	enlaceMenu = document.querySelector("#page>nav>a");
	enlaceMenu.addEventListener("click", despliegaMenu, false);
}

function despliegaMenu()
{
	document.querySelector("#page>nav>#ul1").classList.toggle('desplegado');
	document.querySelector("#page>nav>#ul2").classList.toggle('desplegado');
	document.querySelector("#page>nav>#ul3").classList.toggle('desplegado');
}

window.addEventListener("load", iniciarMenu, false);
