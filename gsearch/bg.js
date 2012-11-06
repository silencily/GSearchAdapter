function updatedListener(tabId,changeInfo,tab) {
	var url_token="http://www.google.com.hk/url?";
	var current_url=tab.url;
	if(current_url.indexOf(url_token)==0){
		var changed_url="https"+current_url.substring(4);
		var updateProperties=new Object();
		updateProperties.url=changed_url;
		chrome.tabs.update(tabId, updateProperties, null);
	}
}
chrome.tabs.onUpdated.addListener(updatedListener);