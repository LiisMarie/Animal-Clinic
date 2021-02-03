<template>
  <div class="home">
    <div class="container-fluid px-0 container__picture">
      <div class="container__picture__text-title">Tondi Loomakliinik</div>
      <div class="container__picture__text-intro">Meie juures on Teie lemmik hoitud!</div>
      <router-link to="/broneeriaeg" class="btn btn__broneeri-aeg"><div class="btn__broneeri-aeg__text">Broneeri aeg</div></router-link>
      <img src="../assets/img/dog-2606759_1920.jpg" class="img-fluid px-0" alt="Image of cat and dog">
    </div>

    <div class="container-fluid">
      <div class="container" style="padding-top: 30px;">
        <div class="row">
          <HomeCard header="Me hoolime"
                    text="Kõikide patsientide heaolu on meile väga tähtis. Pakume laia valikut teenuseid, et hoida Teie lemmikut õnneliku ja tervena."
                    picture_src="pet.png" />
          <HomeCard header="Me ennetame"
                    text="Haiguste ennetamine ja varajane avastamine aitavad pikendada tervena elatud aastaid ja vähendada haigestumist ning enneaegset suremust."
                    picture_src="stethoscope.png" />
          <HomeCard header="Me ravime"
                    text="Meie kollektiivi kuuluvad kogenud loomaarstid, kes kasutades kaasaegset aparatuuri, pakuvad Teie sõbrale ravi ka kõige raskemates olukordades."
                    picture_src="syringe.png" />
          <HomeCard header="Me hooldame"
                    text="Pakume ka Teie lemmikule kosmeetilisi protseduure, sest ta väärib parimat."
                    picture_src="beauty-saloon.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import HomeCard from '@/components/HomeCard.vue'

  export default {
    name: 'Home',
    components: {
      HomeCard
    }
  }

</script>

<style lang="scss">
  @import '../assets/css/styles.css';
  @import '../assets/css/components/page_main.css';

  $primary-color: #008080;
  $bg: #ededed;
  $secondary-bg: #fefefe;
  $btn-hover: #006d6d;
  $btn-active: #004a4a;
  $link-hover: #004a4a;
  $active-nav-item: #e1e1e1;

  .btn__broneeri-aeg {
    position: absolute;
    top: 92%;
    left: 10%;
    transform: translate(-30%, -70%);
    padding-left: 10px;
    width: 26vw;
    background-color: $primary-color!important;
    border-color: $primary-color!important;
    color: white!important;

    :hover {
      background-color: $btn-hover;
      border-color: $btn-hover;
    }

    :active {
      background-color: $btn-active;
      border-color: $btn-active;
    }
  }

  .btn__broneeri-aeg__text {
    font-size: 2.2vw;
  }

  .container__picture {
    position: relative;
    text-align: center;
    color: white;

    &__text-title {
      position: absolute;
      top: 20%;
      left: 20%;
      transform: translate(-30%, -50%);
      font-size: 6vw;
    }

    &__text-intro {
      position: absolute;
      top: 35%;
      left: 11%;
      transform: translate(-19%, -50%);
      font-size: 2.2vw;
    }
  }

  .introduction {
    text-align: center;

    &__picture {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 60px;
      padding-bottom: 25px;
    }
  }
</style>
