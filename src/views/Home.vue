<template>
  <div class="home">
    <v-alert class="ma-5" :value='apiVersion != ""' dense dismissible type="success">
      API Version is: {{apiVersion}}
    </v-alert>

    <v-alert class="ma-5" type="error" :value='error != ""' dense dismissible>
      {{error}}
    </v-alert>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import APIClient from '@/logic/Client'

const api = new APIClient()

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private apiVersion = ""
  private error = ""

  mounted() {
    api.info().then((response) => {
        this.apiVersion = response.data.version
      })
      .catch((e) => {
        this.error = "API not available"
        console.log(e);
      });
  }
}
</script>
