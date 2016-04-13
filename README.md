# ionic1splitview
tweaking multiple ion-nav-view to build splitview

## Solution Details

* mandatory changes (always in splitview mode)
  1. added templates/split-view.html to breakdown the tab-chats into primary and secondary views (ion-nav-view)
  2. added css/style.css to do the view layout (by default ion-nav-view is full window)
  3. added ui-route assembly in module.config()

* nice to have changes (showing selected item in the list)
  1. added selected() function in ChatCtrl
  2. added ng-class in templates/chat-list.html

* optional changes (configurable splitview mode)
  1. added window.splitview (this can be any global variable or angular provider value) to decide what ui-route logic to apply
  2. added ui-route assembly logic in module.config() to set different states in splitview or non-splitview mode


## Advantange

* transparent to the individual templates and controllers (no need to make modification)
* inherited all ion-nav-view features (content scrolling, nav history and etc)
* configurable splitview or non-splitview mode (during app load time)

## Disadvantage

* splitview in tabs is not a common UI/UX pattern
* potential issues (as this is not an offically supported feature
