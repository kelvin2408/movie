<template>
  <div class="profilecard">
    <div class="header">
            <h1 class="header-title">Cinema XXI</h1>
            <h3 class="header-subtitle">Find your best movie here</h3>
        </div>
    <header>
      <h1 class="font"> Daftar Film : </h1>
    </header>
    <br>
    <div class="row">
    <div class="col-md-3" v-for="(movie, index) in movies" :key="movie.id">
      <router-link :to="{ name: 'Movie', params: { id: index } }">
        <img class="poster" :src="movie.image" width="240p" height="360p"/>
          <br>
        <h2>{{ movie.title }}</h2>
      </router-link>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      movies: []
    }
  },
  created () {
    this.getAllUser()
  },
  methods: {
    getAllUser () {
      axios.get('https://raw.githubusercontent.com/kelvin2408/movie/list/List_Movie.json')
        .then((response) => {
          this.movies = response.data
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.profilecard {
  width: 80%;
  border-radius: 5px;
  background-color:whitesmoke;
  margin: auto;
  position: absolute;
  left: 0; right: 0;
}
.header {
  padding: 50px;
  grid-column: 1/5;
  background-color: #1abc9c;
  color: #fff;
  text-align: left;
}
.header-title {
  font-family: monospace;
  font-size: 70px;
  color: #34495e;
}
.header-subtitle {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 20px;
  color: #fff;
}
.poster {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
}
.poster:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.font {
  font-family: fantasy;
}
</style>
