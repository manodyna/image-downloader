var images = [];

// querying for active tab and adding images from active tab to gallery class
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "get_images"}, response => {
        $('.gallery').html('');

        images = response;
        response.map((img) => {
            $('.gallery').append('<img src="' + img.src + '" />');
        })
    })
})

// downloading images on button click and sending a runtime message to chrome
$(document).on('click', '#download_all', (e) => {
    console.log("Downloading all");
    chrome.runtime.sendMessage({action: "download", data: images}, res => {
        console.log("Complete");
    })
})
