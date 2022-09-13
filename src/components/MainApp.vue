<template>

</template>
<script>

export default {
  name: "App",
  mounted() {
    $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

  }
  
}

</script>

<style scoped>
.slide {
  margin-top: 80px;
}
.slide img {
  height: 80vh;
}
   @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

        * {
            font-family: 'Poppins', sans-serif;
        }

        img {
            height: 250px;
        }

        body {
            background: hsl(0, 0, 94%);
        }
</style>