<template>
  <div class="main">
    <Panel text="Компонент без обертки" />
    <br>
    <PanelWithLogger text="Компонент, обернутый в логгер HOC" />
    <br>
    <PanelWithColor text="Компонент, обернутый в цветовой HOC" />
    <br>
    <PanelWithLoggerAndColor text="Компонент, обернутый в логгер и цветовой HOC" />
  </div>
</template>

<script>
  import Panel from './Panel.vue';
  import WithLogger from './WithLogger';
  import ColorLogger from './WithColor';

  const PanelWithLogger = WithLogger(Panel);
  const PanelWithColor = ColorLogger(Panel);
  const PanelWithLoggerAndColor = WithLogger(ColorLogger(Panel));

  export default {
    name: 'Main',
    props: {},
    components: {
      Panel,
      PanelWithLogger,
      PanelWithColor,
      PanelWithLoggerAndColor
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
