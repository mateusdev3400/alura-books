export function listMenuFooter(listId, dataList) {
    let htmlList = `<li class="footer__menu-title">Educação</li>`;
    let elementList = document.querySelector(`#${listId}`);

    dataList.forEach(menuList => {
        htmlList += `
        <li class="footer__menu-item">
            <img src="assets/images/footer/${menuList.src}" alt="Logo - ${menuList.title}" class="footer__menu-image"/>
            <span class="footer__menu-span">${menuList.title}</span>
        </li>
        `;
    });

    elementList.innerHTML = htmlList;
}