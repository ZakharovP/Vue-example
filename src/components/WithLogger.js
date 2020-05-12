export default component => {
  return {
    functional: true,
    name: "WithLogger",
    render(h, context) {
      return h(component, {
        ...context.data,
        nativeOn: {
          click: evt => {
            const msg = `!!! mouse CLICKED at (${evt.screenX}, ${evt.screenY}) !!!`;
            console.log(msg);

            let target = evt.currentTarget;
            let div = target.querySelector('div[data-log="1"]');
            if (!div) {
              div = document.createElement("div");
              target.appendChild(div);
              div.setAttribute('data-log', '1');
            }
            div.textContent = msg;
          },
          mousemove: evt => {
            const msg = `mouse moved to (${evt.screenX}, ${evt.screenY})`;
            console.log(msg);


            let target = evt.currentTarget;
            let div = target.querySelector('div[data-log="1"]');
            if (!div) {
              div = document.createElement("div");
              target.appendChild(div);
              div.setAttribute('data-log', '1');
            }
            div.textContent = msg;
          }
        }
      });
    }
  };
}
