<script setup lang="ts">
import SectionTitle from "../components/Utils/SectionTitle.vue";
import ContactInput from "../components/Contact/ContactInput.vue";
import ContactTextArea from "../components/Contact/ContactTextArea.vue";
import ContactSubmit from "../components/Contact/ContactSubmit.vue";
</script>

<template>
  <div class="contact-page">
    <div class="contactus-page">
    <div class="contactus-header">
      <SectionTitle>Contactez-nous</SectionTitle>
    </div>
    <div class="contactus-form">
      <form action="">
        <ContactInput
            class="contactus-input"
            inputid="contactus-nom"
            name="nom"
            label="Nom"
            placeholder="Votre nom"
        />
        <ContactInput
            class="contactus-input"
            inputid="contactus-prenom"
            name="prenom"
            label="Prénom"
            placeholder="Votre prénom"
        />
        <ContactInput
            class="contactus-input"
            inputid="contactus-email"
            name="email"
            label="Email"
            placeholder="Votre email"
            type="email"
        />
        <ContactTextArea
            class="contactus-input"
            inputid="contactus-message"
            name="message"
            label="Message"
            placeholder="Votre message"
        />
        <ContactSubmit class="contactus-submit" value="Envoyer" />
      </form>
    </div>
  </div>

    <div class="contactinfo-page">
      <div class="contactinfo-header">
        <SectionTitle>Informations contact</SectionTitle>
      </div>
      <div class="contactinfo-body">
        <div class="contact-info-body-item">
          <p>Adresse</p>
          <a href="http://maps.google.com/?q=48 rue Desgroux, Beauvais, France">48 rue Desgroux<br />Beauvais, France</a>
        </div>
        <div class="contact-info-body-item">
          <p>Téléphone</p>
          <a href="tel:0344156800">03 44 15 68 00</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.contactinfo-header,
.contactus-header {
  margin-bottom: 40px;
}

.contactinfo-body {
  width: 40vw;
  text-align: center;
}

.contact-info-body-item {
  margin-bottom: 40px;
  font-size: 24px;
}

.contact-info-body-item a {
  color: var(--dark-blue);
  text-decoration: none;
}

.contactus-form {
  width: 40vw;
  margin: auto;
  background-color: var(--light-blue);
  padding: 40px;
  border-radius: 10px;
  color: var(--white);
}

.contactus-input {
  margin-bottom: 40px;
}
</style>
