let titles = [
  "Full Stack Developer",
  "Back End Developer",
  "Front End Developer",
  "Software Engineer",
];
let profileTexts = [];
for (let i = 0; i < titles.length; i++) {
  let title = titles[i];
  let titleStrings = [];
  let splittedText = "";
  for (let j = 0; j < title.length; j++) {
    splittedText += title.charAt(j);
    titleStrings.push(splittedText);
  }
  let repeatedTitle = [];
  for (let i = 0; i < 15; i++) repeatedTitle = [...repeatedTitle, title];
  profileTexts = [
    ...profileTexts,
    ...titleStrings,
    ...repeatedTitle,
    ...titleStrings.reverse(),
  ];
}
export default profileTexts;