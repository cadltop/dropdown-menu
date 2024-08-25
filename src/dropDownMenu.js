export const dropDownMenu = function (trigger, menu) {
  trigger.onmouseover = () => {
    show();
    menu.onmouseleave = hide;
  };
  trigger.onmouseleave = () => {
    menu.onmouseover = show;
    hide();
  };
  hide();
  function hide() {
    menu.style.display = "none";
  }
  function show() {
    menu.style.display = "flex";
  }
  return { show, hide };
};
