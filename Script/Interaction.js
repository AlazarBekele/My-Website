  
  // to the add class name in JavaScript list -->
//                         - document.classList.add('name of the class');

  let ClassBtnFunction = document.querySelector ('.cancleBtn');
  const SideChange = document.querySelector ('.Side-Bar');

    function CancleBtnOrg () {

        SideChange.classList.add('Turn-Off');
        ClassBtnFunction.innerHTML = '';

      // if (ClassBtnFunction.innerText === '❌') {
      //   ClassBtnFunction.innerText = '✔';

      //   // SideMain.classList.add('TurnOff');
      //   // console.log('It work')
      // }

      setTimeout ( function counter () {
        SideChange.classList.add('Turn-Opa');
      }, 1900);
  }
      function TurnOffOrg() {

  }