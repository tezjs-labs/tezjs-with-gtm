import { addLib, tagManager, addStylesheet } from "@tezjs/js"


export default addLib({
    afterUserInteraction: [tagManager("Your_GTM_CODE"), addStylesheet("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500;1,600&display=swap")]
})