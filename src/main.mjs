import { AllPackages } from "mathjax-full/js/input/tex/AllPackages.js";
import { mathjax } from "mathjax-full/js/mathjax.js";
import { TeX } from "mathjax-full/js/input/tex.js";
import { SVG } from "mathjax-full/js/output/svg.js";
import { liteAdaptor } from "mathjax-full/js/adaptors/liteAdaptor.js";
import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html.js";

AllPackages.push("colorv2");

function main() {
  const tex = new TeX({ packages: AllPackages });
  const svg = new SVG({});
  const adaptor = liteAdaptor();
  const handler = RegisterHTMLHandler(adaptor);
  const html = mathjax.document("", {
    InputJax: tex,
    OutputJax: svg,
  });
  const node = html.convert("\\frac{10}{20} = 0.5", {});
  const out = adaptor.outerHTML(node);
  console.log(out);
}

main();
