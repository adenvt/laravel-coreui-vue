<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card header="Bootstrap Modals">
            <b-button
              type="button"
              variant="secondary"
              @click="myModal = true"
            >
              Launch demo modal
            </b-button>
            <b-button
              type="button"
              variant="secondary"
              @click="largeModal = true"
            >
              Launch large modal
            </b-button>
            <b-button
              type="button"
              variant="secondary"
              @click="smallModal = true"
            >
              Launch small modal
            </b-button>
            <hr>
            <b-button
              type="button"
              variant="primary"
              @click="primaryModal = true"
            >
              Launch primary modal
            </b-button>
            <b-button
              type="button"
              variant="success"
              @click="successModal = true"
            >
              Launch success modal
            </b-button>
            <b-button
              type="button"
              variant="warning"
              @click="warningModal = true"
            >
              Launch warning modal
            </b-button>
            <b-button
              type="button"
              variant="danger"
              @click="dangerModal = true"
            >
              Launch danger modal
            </b-button>
            <b-button
              type="button"
              variant="info"
              @click="infoModal = true"
            >
              Launch info modal
            </b-button>
          </b-card>
        </b-col><!--/.col-->
      </b-row><!--/.row-->
    </div>

    <!-- Modal Component -->
    <b-modal
      v-model="myModal"
      title="Modal title"
      @ok="myModal = false"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </b-modal>
    <b-modal
      v-model="largeModal"
      title="Modal title"
      size="lg"
      @ok="largeModal = false"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </b-modal>
    <b-modal
      v-model="smallModal"
      title="Modal title"
      size="sm"
      @ok="smallModal = false"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </b-modal>

    <b-modal
      v-model="primaryModal"
      title="Modal title"
      class="modal-primary"
      @ok="primaryModal = false"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </b-modal>
    <b-modal
      v-model="successModal"
      title="Modal title"
      class="modal-success"
      ok-variant="success"
      @ok="successModal = false"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </b-modal>
    <b-modal
      v-model="warningModal"
      title="Modal title"
      class="modal-warning"
      ok-variant="warning"
      @ok="warningModal = false"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </b-modal>
    <b-modal
      v-model="dangerModal"
      title="Modal title"
      class="modal-danger"
      ok-variant="danger"
      @ok="dangerModal = false"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </b-modal>
    <b-modal
      v-model="infoModal"
      title="Modal title"
      class="modal-info"
      ok-variant="info"
      @ok="infoModal = false"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Modals',
  data () {
    return {
      myModal     : false,
      largeModal  : false,
      smallModal  : false,
      primaryModal: false,
      successModal: false,
      warningModal: false,
      dangerModal : false,
      infoModal   : false,
    }
  },
}
</script>
