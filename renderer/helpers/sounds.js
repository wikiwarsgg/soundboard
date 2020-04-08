import sounds from "../assets/sounds.json";

export const getCategories = () => {
  return Object.keys(sounds);
};

export const getSounds = () => {
  const list = [];
  Object.entries(sounds).map(([k, v]) => {
    v.map((e) => {
      list.push({
        name: e.replace(".mp3", ""),
        url: `assets/${k}/${e}`,
        category: k,
      });
    });
  });
  return list;
};
