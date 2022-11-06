<script setup lang="ts">
import SectionTitle from "../components/Utils/SectionTitle.vue";
import ContactInput from "../components/Contact/ContactInput.vue";
import ContactTextArea from "../components/Contact/ContactTextArea.vue";
import ContactSubmit from "../components/Contact/ContactSubmit.vue";
</script>

<template>
  <div class="contact-header">
    <SectionTitle>Contactez-nous</SectionTitle>
  </div>
  <div class="contact-form">
    <form action="">
      <ContactInput
        class="contact-input"
        inputid="contact-input-nom"
        name="nom"
        label="Nom"
        placeholder="Votre nom"
      />
      <ContactInput
        class="contact-input"
        inputid="contact-input-prenom"
        name="prenom"
        label="Prénom"
        placeholder="Votre prénom"
      />
      <ContactInput
        class="contact-input"
        inputid="contact-input-email"
        name="email"
        label="Email"
        placeholder="Votre email"
        type="email"
      />
      <ContactTextArea
        class="contact-input"
        inputid="contact-input-message"
        name="message"
        label="Message"
        placeholder="Votre message"
      />
      <ContactSubmit class="contact-submit" value="Envoyer" />
    </form>
  </div>
</template>

<style scoped>
.contact-header {
  margin-bottom: 40px;
}

.contact-form {
  width: 60%;
  margin: auto;
  background-color: var(--light-blue);
  padding: 40px;
  border-radius: 10px;
  color: var(--white);
}

.contact-input {
  margin-bottom: 40px;
}

</style>
