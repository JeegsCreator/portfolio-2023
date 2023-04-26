import { derived, writable } from "svelte/store";
import translations from "./translations";
import projects from "./projects";

export const locale = writable("en");
export const locales = Object.keys(translations);

function translate(locale, key, vars) {
  // Let's throw some errors if we're trying to use keys/locales that don't exist.
  // We could improve this by using Typescript and/or fallback values.
  if (!key) throw new Error("no key provided to $t()");
  if (!locale) throw new Error(`no translation for key "${key}"`);

  // Grab the translation from the translations object.
  let text = translations[locale][key];

  if (!text) throw new Error(`no translation found for ${locale}.${key}`);

  // Replace any passed in variables in the translation string.
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export const projectsLocales = Object.keys(projects);

function translateProjects(locale, index, key, vars) {
    // Let's throw some errors if we're trying to use keys/locales that don't exist.
    // We could improve this by using Typescript and/or fallback values.
    if (index === undefined) throw new Error(`no project for index "${index}"`);
    if (!key) throw new Error("no key provided to $t()");
    if (!locale) throw new Error(`no translation for key "${key}"`);
  
    // Grab the translation from the translations object.
    let text = projects[index][locale][key];
  
    if (!text) throw new Error(`no translation found for projects[${index}].${locale}.${key}`);
  
    // Replace any passed in variables in the translation string.
    Object.keys(vars).map((k) => {
      const regex = new RegExp(`{{${k}}}`, "g");
      text = text.replace(regex, vars[k]);
    });
  
    return text;
  }

export const tp = derived(locale, ($locale) => (index, key, vars = {}) =>
  translateProjects($locale, index, key, vars)
);

export const t = derived(locale, ($locale) => (key, vars = {}) =>
  translate($locale, key, vars)
);
