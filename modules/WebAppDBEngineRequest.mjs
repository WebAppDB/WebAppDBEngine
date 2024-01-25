class WebAppDBEngineRequest {
  data = {
    subscribers : []
  }

  subscribe( iEngineRequestSubscriber ) {
    this.data.subscribers.push(iEngineRequestSubscriber);
  }
  
  unsubscribe( iEngineRequestSubscriber ) {
    for( var i = this.data.subscribers.length - 1; i >= 0; --i) {
      if (this.data.subscribers == iEngineRequestSubscriber) {
        this.data.subscribers.splice(i, 1);
      }
    }
  }

  loadModule( iModulePath ) {
    for( var i = 0; i < this.data.subscribers.length; ++i) {
      if (null != this.data.subscribers[i] ) this.data.subscribers[i].loadModule(iModulePath);
    }
  }

  static Singleton = null
  static getSingleton() {
    if (null == this.Singleton) this.Singleton = new WebAppDBEngineRequest()
    return this.Singleton;
  }
}

export class IEngineRequestSubscriber {

  constructor() {
    WebAppDBEngineRequest.getSingleton().subscribe(this);
  }

  loadModule(iModulePath) {
  }
  
}

export function sendLoadModuleRequest(iModulePath) {
  WebAppDBEngineRequest.getSingleton().loadModule(iModulePath);
}