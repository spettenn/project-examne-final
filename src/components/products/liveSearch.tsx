import React, { useRef } from "react";

export default function liveSearch() {
    let cards = document.querySelectorAll('.cards');
    
        let search_query : string = (document.getElementById("searchbox") as HTMLInputElement).value;
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].innerText.toLowerCase().includes(search_query.toLowerCase())) {
            cards[i].classList.remove('hidden');
        } else {
            cards[i].classList.add('hidden');
        }
    }
}

let typingTimer;
let typeInterval = 500;
let searchInput: any = document.querySelector.getElementByID('searchbox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});