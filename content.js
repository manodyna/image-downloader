// gets all images on the page if the pugin is opened
chrome.runtime.onMessage.addLisener((request, sender, sendResponse) => {
    if (request.action === "get_images") {
        let formattedImages = [];

        
//         gets the data from the images
        let images = $('img').map((i, img) => {
            if($(img).data('src')) {
                formattedImages.push({
                    src: $(img).data('src')
                })
            } else if($(img).src) {
                formattedImages.push({
                    src: $(img).src
                })
            }
        })

//         sending the formatted images
        sendResponse(formattedImages);
    }
})
