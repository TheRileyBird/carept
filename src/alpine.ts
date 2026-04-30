import intersect from "@alpinejs/intersect";

export default (Alpine: { plugin: (plugin: unknown) => void }) => {
  Alpine.plugin(intersect);
};
