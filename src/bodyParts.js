const path = "../assets/images/";
class bodyParts {
  constructor() {
    this.imgs = [
      path + "1.png",
      path + "2.png",
      path + "3.png",
      path + "4.png",
      path + "5.png",
      path + "6.png",
      path + "7.png",
    ];
  }
  showImg(index=5) {
    const img = new Image();
    img.src = this.imgs[index];
    img.className="images"
    return img;
  }
}
export default bodyParts;
