<template>
  <div class="container mx-auto" id="dashboard-container">
    <v-card width="256" id="navigation">
      <v-navigation-drawer right permanent color="primary">
        <v-list nav dense>

          <v-list-group no-action >
            <template v-slot:activator >
              <v-list-item-content>
                <v-list-item-title >Admin</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title v-text="title"></v-list-item-title>

              
            </v-list-item>
          </v-list-group>

          <v-list-group no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title, icon], i) in cruds" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title, icon], i) in cruds" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="([title, icon], i) in cruds" :key="i" link>
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          
        </v-list>
      </v-navigation-drawer>
    </v-card>
    <!-- <div class="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                        <span class="title">wiaecv</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                        <span class="title">wiaecv</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="people-outline"></ion-icon></span>
                        <span class="title">wiaecv</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                        <span class="title">wiaecv</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                        <span class="title">wiaecv</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                        <span class="title">wiaecv</span>
                    </a>
                </li>
            </ul>
    </div>-->
    <main></main>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      admins: [
        ['sdvsda', 'sadvbasdk'],
        ['awecuyvw', 'akbewuv']
      ]
    }
  }
};
</script>

<style scoped>
#dashboard-container {
  width: 80%;
  background: var(--grey);
  border-radius: 0.5em;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  min-height: 80vh;
  padding: 0;
}

#navigation {
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  border-radius: inherit;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  box-shadow: none;
}

#navigation * {
  color: var(--white);
}

</style>