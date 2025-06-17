// Lab 17 Ц map (variant 9)
export function extractDomains(emails) {
  return emails.map(e => {
    const i = e.indexOf("@");
    return i === -1 ? "" : e.slice(i + 1);
  });
}
// консольне демо
console.log(
  extractDomains(["alice@gmail.com","bob@ukr.net","carol@company.org"])
);
