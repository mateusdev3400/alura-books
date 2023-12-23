// Mock - Data
import { listMenuEducation } from "./mock/listMenuEducation.js";
import { listMenuEducationOnline } from "./mock/listMenuEducationOnline.js";
import { listMenuCommunity } from "./mock/listMenuCommunity.js";

// Function - Listing Menu Footer
import { listMenuFooter } from "./function/listMenuFooter.js";

listMenuFooter("menu-list-education", listMenuEducation);
listMenuFooter("menu-list-education-online", listMenuEducationOnline);
listMenuFooter("menu-list-community", listMenuCommunity);

// Function - List Slide (Swiper)
import { listSwiperSlide } from "./function/listSwiperSlide.js";

listSwiperSlide("show-slide");
listSwiperSlide("show-slide-1");