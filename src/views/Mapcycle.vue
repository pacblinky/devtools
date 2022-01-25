<template>
  <div class="container">
    <div class="card w-100 bg-dark">
      <div class="card-body text-white">
        <h4 class="text-center mb-5">Mapcycles</h4>
        <div class="container">
        <ul class="list-group">
          <li @click="currentMapcycle = mapcycle.id" :class="currentMapcycle == mapcycle.id? 'border-success':'border-secondary'" style="cursor: pointer;" class="list-group-item mb-3 list-group-item-action bg-secondary d-flex justify-content-between align-items-center text-white" v-for="mapcycle in mapcycles" :key="mapcycle.id">
            <h4>#{{mapcycle.id}} {{mapcycle.name}}</h4>
            <div class="d-flex">
            <button @click="exportMapcycle(mapcycle.id)" class="btn btn-success">Export</button>
            <button @click="deleteMapcycle(mapcycle.id)" class="btn btn-danger mx-2">Delete</button>
            <button @click="deleteMapcycle(mapcycle.id)" class="btn btn-success">Edit</button>
            <button @click="cloneMapcycle(mapcycle.id)" class="btn btn-primary ms-2">Clone</button>
            </div>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mapcycle",
  data() {
    return {
      mapcycles: [{ id: 0, name: "mapcycle" },{id: 1, name: "hello"}],
      currentMapcycle: 0,
      sorting: false,
    };
  },
};
</script>