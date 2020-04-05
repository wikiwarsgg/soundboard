module.exports = {
  extends: [
    "config:base",
    ":automergePatch",
    ":automergePr",
    ":disableDigestUpdates",
  ],
  commitMessagePrefix: "⬆️",
  platform: "github",
  repositories: ["wikiwarsgg/soundboard"],
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
};
