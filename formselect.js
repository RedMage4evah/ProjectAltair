
// Source - https://stackoverflow.com/a
// Posted by Mister Jojo
// Retrieved 2025-11-30, License - CC BY-SA 4.0

const formSelect = document.getElementById('form-selector')
  ,   myForms    = document.getElementById('my-forms')
  ;
formSelect.oninput=()=>{ myForms.className = `f-${formSelect.value}` ;};