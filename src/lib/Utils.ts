import App from '../App'
import icon from '../Images/icon-R.png'

class Utils {
  public static initialize(app: App) {
    this.app = app
  }

  public static setAppClass(name: string) {
    this.app.setClass(name)
  }

  public static getBackgroundImage(url: string | null) {
    if (!url) {
      return icon
    }
    return 'url(https://www.getdaze.org' + url + ')'
  }

  private static app: App

}

export default Utils
