import Phaser from "phaser";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  scale: {
    width: 800,
    height: 600,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
    },
  },
};

export default config;
