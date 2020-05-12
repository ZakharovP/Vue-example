import Vue from 'vue';


export default component => {
  return Vue.component('WithColor', {
    render(h) {
      return h(component, {
        props: {
          ...this.$vnode.data.attrs,
        },
        attrs: {
          style: 'color: blue; background: ' + this.color,
        },
        nativeOn: {
          mousemove: evt => {
            const x = evt.clientX;
            const y = evt.clientY;
            if (this.lastPoint) {
              const dx = x - this.lastPoint.x;
              const dy = y - this.lastPoint.y;
              const dl = Math.sqrt(dx ** 2 + dy ** 2);
              this.path += dl;
            }
            this.lastPoint = {x, y};
          }
        }
      });
    },
    data() {
      return {
        path: 0,
        lastPoint: null
      };
    },
    computed: {
      color() {
        const r = parseInt(127 * Math.sin(0.05 * this.path / 180 * Math.PI) + 128);
        const g = parseInt(127 * Math.sin(0.1 * this.path / 180 * Math.PI + Math.PI / 4) + 128);
        const b = parseInt(127 * Math.sin(0.06 * this.path / 180 * Math.PI + Math.PI / 2) + 128);
        return `rgb(${r}, ${g}, ${b})`;
      }
    }
  });
}
