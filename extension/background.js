chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(tab.id, {
      code: `var i=0,x=document.getElementsByClassName('jobs-search-results-list')[0];function phase2(){document.querySelectorAll("li").forEach(function(e){e.id&&e.innerHTML.match(/Promoted/)&&e.remove()}),setTimeout(function(){x.scrollTop=0},0)}!function e(){x.scroll(0,100*++i),i>40?phase2():setTimeout(e,0)}();`,
    });
  });
  