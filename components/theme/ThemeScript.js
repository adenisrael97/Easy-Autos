import { THEME_STORAGE_KEY } from "./ThemeProvider";

const script = `(function(){try{var k='${THEME_STORAGE_KEY}';var s=localStorage.getItem(k);var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');var r=document.documentElement;r.dataset.theme=t;r.style.colorScheme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
