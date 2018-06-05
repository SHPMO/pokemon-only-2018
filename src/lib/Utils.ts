import App from '../App'

class Utils {
  public static initialize(app: App) {
    this.app = app
  }

  public static setAppClass(name: string) {
    this.app.setClass(name)
  }

  private static app: App

}

export default Utils
