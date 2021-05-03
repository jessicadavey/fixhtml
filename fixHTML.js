let handleFixHTML = function () {
  let fixedHTML = processText(pastedTextField.value, domainNameField.value);

  fixedHTMLField.innerText = fixedHTML;
}

let processText = function (text, domain) {
  let newText = text;
  const stringsToReplace = [`data-id="null"`, `title=""`, / +style=".*?;"/, `https://${domain}`, /<!--.*?-->/, '<span>', '</span>', '<em>', '</em>', '<u>', '</u>', '<br/>', '</mark>', /<p>\s*<\/p>/];
  stringsToReplace.forEach(text => {
    let regex = new RegExp(text, 'g');
    newText = newText.replace(regex, '');
  });

  return newText;
};


const pastedTextField = document.querySelector('#pasted-text');
const domainNameField = document.querySelector('#domain-name');
const fixedHTMLField = document.querySelector('#fixed-html');

const fixHTMLButton = document.querySelector('#fix-html');

fixHTMLButton.addEventListener('click', handleFixHTML);