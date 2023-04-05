class RandomColor {
  constructor(lightness) {
    //console.log(lightness);
    // this.r = Math.floor(Math.random() * 256 + lightness);
    // this.g = Math.floor(Math.random() * 256 + lightness);
    // this.b = Math.floor(Math.random() * 256 + lightness);
    this.r = r(256);
    this.g = r(256);
    this.b = r(256);
    // const primary = r(2);
    // if (primary == 0) {
    //   this.r = Math.floor(Math.random() * 256 + 100);
    // } else if (primary == 1) {
    //   this.g = Math.floor(Math.random() * 256 + 100);
    // } else if (primary == 2) {
    //   this.b = Math.floor(Math.random() * 256 + 100);
    // }
  }
}
