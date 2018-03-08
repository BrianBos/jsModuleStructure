function ModuleName() {
  // store context for root Module
  let self = this

  // functions that carry out a specific task within the Module
  // called only within this module
  let _helpers = {
    helperFunction: _ => {}
  }

  // native functions to query various aspects of the Module
  // can retrieve data or retrieve states(booleans)
  let _queries = {
    queryName: _ => {},
    // ...
  }

  // private variables hashes
  // _private variables are accessed only within this Module
  // _public variables can be accessed from outside this module
  let _private = {
    variableName: '',
    // ...
  }
  let _public = {
    variableName: '',
    // ...
  }

  // functions that set up and return other modules used by this Module
  let _children = {
    otherModuleName: _ => { return new OtherModuleName()},
    // ...
  }

  // knockout varibales used to control module
  // they are expossed as attributes of the Module
  // this also contains update functions to be called when the ko is changed
  let _viewKoControls = {
    controlName: {
      obs: ko.observable(), // or ko.observableArray(); knockout objects
      updateFunction: _ => {}
    },
    // ...
  }

  // native functions used to control module
  // they are expossed as attributes of the Module
  let _viewFnControls = {
    controlname: _ => {},
    // ...
  }

  // function to set up Module
  // exposes _viewControls, _viewFnControls
  function setup() {
    // ... custom setup statements

    // expose knockout controls
    for (obs in _viewKoControls) {
      self[obs] = _viewKoControls[obs].obs
    }
    // expose function controls
    for (fn in _viewFnControls) {
      self[fn] = _viewFnControls[fn]
    }
    // expose status checks
    for (fn in _statusChecks) {
      self[fn] = _statusChecks[fn]
    }
  }
  setup()

  // function to initialize Module
  // can initialialize to default state or load some saved data
  function init(options) {}
  init()
}