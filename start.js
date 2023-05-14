chrome.action.onClicked.addListener(openATab);

function openATab() {
    chrome.tabs.create({
        url: "index.html"
    });
}