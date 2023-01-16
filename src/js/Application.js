import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    this._beat = new Beat();
    this._create();

    this.emit(Application.events.READY);
  }

  _create() {
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;
    let maxLenght = lyrics.length;
    this._beat.on(Beat.events.BIT, () => {
      const message = document.createElement("div");
      message.classList.add("message");
      message.innerText = lyrics[count];
      count++;
      if (count <= maxLenght) {
        document.querySelector(".main").appendChild(message);
      } else {
        console.log("done");
      }
    });
  }
}
