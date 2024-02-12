export const scroller = document.querySelector(".scroller");
const next = document.getElementById("next");
const back = document.getElementById("back");

export function handleScroller(){
    next.addEventListener("click", () => {
        const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
        if (scroller.scrollLeft < maxScrollLeft) {
            scroller.scrollBy({ left: 368, behavior: 'smooth' });
        }
    });

    back.addEventListener("click", () => {
        if (scroller.scrollLeft > 0) {
            scroller.scrollBy({ left: -368, behavior: 'smooth' });
        }
    });


    //Chat GPT code tutor reeeally helped with this because I could not figure it out no matter what I did.  At some point I just decided I wanted to know the answer more than I wanted to figure it out myself.
    document.querySelector('.scroller').addEventListener('wheel', function(e) {
        // Check if the wheel event is primarily vertical
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          window.scrollBy(0, e.deltaY); // Scroll the window vertically by the amount of vertical scroll
          e.preventDefault(); // Prevent the default scroll (horizontal in this case)
        }
      }, { passive: false }); // Use passive:false to allow preventDefault to work
      
}


