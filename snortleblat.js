const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 1,
  health: 100,
  image: "images/snortleblat.webp",

  attacked() {
    if (this.health <= 0) return;
    this.health -= 20;
    if (this.health <= 0) {
      this.health = 0;
      render();
      els.attacked.disabled = true;
      els.deathText.textContent = `${this.name} has died.`;
      els.deathDialog.showModal();
      return;
    }
    render();
  },

  levelUp() {
    this.level += 1;
    render();
  }
};

const els = {
  name: document.querySelector("#name"),
  image: document.querySelector("#image"),
  class: document.querySelector("#class"),
  level: document.querySelector("#level"),
  health: document.querySelector("#health"),
  attacked: document.querySelector("#attacked"),
  levelUp: document.querySelector("#levelUp"),
  deathDialog: document.querySelector("#deathDialog"),
  deathText: document.querySelector("#deathText"),
  closeDialog: document.querySelector("#closeDialog")
};

function render() {
  els.name.textContent = character.name;
  els.image.src = character.image;
  els.image.alt = character.class;
  els.class.textContent = character.class;
  els.level.textContent = character.level;
  els.health.textContent = character.health;
}

els.attacked.addEventListener("click", () => character.attacked());
els.levelUp.addEventListener("click", () => character.levelUp());
els.closeDialog.addEventListener("click", () => els.deathDialog.close());

render();