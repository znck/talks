<template>
  <SidebarSlide sidebar-no-padding>
    <img slot="aside" class="author" src="../assets/znck.jpg" />

    <Fit>
      <Title class="title">Rahul Kadyan</Title>
      <section class="links">
        <a href="https://twitter.com/@znck0">@znck0</a> | <a href="https://znck.me" target="_blank">znck.me</a>
      </section>
      <section class="about">
        <div class="position">
          <img src="../assets/vue.png" />
          <div class="name">Contributor</div>
          <div class="company">Vue Ecosystem</div>
        </div>

        <div class="position">
          <img src="../assets/myntra.png" />
          <div class="name">Software Developer</div>
          <div class="company">Myntra Designs</div>
        </div>

        <div class="position">
          <img src="../assets/vue-blr.png" />
          <div class="name">Organiser</div>
          <div class="company">VueBLR</div>
        </div>
      </section>
    </Fit>
  </SidebarSlide>
</template>

<style scoped>
.author {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  margin: 0;
  font-size: 3rem;
  text-align: center;
}

.about {
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.54);
  display: flex;
}

.position {
  flex: 1;
  margin: 1.5rem;
  text-align: center;
}

.position img {
  width: 7.5rem;
  height: 7.5rem;
  margin-bottom: -0.5rem;
  object-fit: contain;
}

a {
  text-decoration: none;
}

.links {
  text-align: center;
}
</style>


