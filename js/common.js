
// function updateIfram()
// {   
//     event.preventDefault()
//     iframeSrc.src = 'slides/slide1/index.html'
//     event.preventDefault()
// }
function updateIfram1()
{   
    event.preventDefault()
    iframeSrc.src = 'slides/slide2/index.html'
    event.preventDefault()
}
// CLMPlayer.registerEventListener("viewappearing", enableLongOperation);
// CLMPlayer.registerEventListener("viewappearing", enableLongOperation);
// CLMPlayer.registerEventListener("returntocallbuttonpress", CallbuttonPlayerHandler);
CLMPlayer.registerEventListener("cancelbuttonpress", CancelbuttonPlayerHandler);
//CLMPlayer.registerEventListener("playbuttonpress", CallbuttonPlayerHandlerProductMessage); returntocallbuttonpress, cancelbuttonpress
