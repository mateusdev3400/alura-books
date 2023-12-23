import { swiperFiles } from "../mock/swiper/swiperFiles.js";

export function listSwiperSlide (listId) {
    let htmlList = "";
    let elementList = document.querySelector(`#${listId}`);
    
    swiperFiles.forEach((swiperSlide) => {
        htmlList += `
            <div class="swiper-slide">
                <img src="assets/images/main/carousel/${swiperSlide.src}.svg" alt="Logo - ${swiperSlide.title}"/>
            </div>
        `;
    });

    elementList.innerHTML = htmlList;
}