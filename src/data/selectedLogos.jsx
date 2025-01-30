import { logos } from "./logos";

export function getSelectedLogos(selectedNames) {
  return logos.filter(logo => selectedNames.includes(logo.nombre));
}