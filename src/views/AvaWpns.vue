<template>
    <div class="container">
        <div class="card bg-dark text-white w-100">
  <div class="card-body">
    <h5 class="card-title text-center">
        <select class="btn-dark btn btn-lg mb-3" v-model="mode">
            <option :value="0">availableWeapons</option>
            <option :value="1">hideSeek_Weapons</option>
            <option :value="2">hideSeek_Nades</option>
            <option :value="3">hideSeek_Extra</option>
        </select>
        </h5>
    <div class="container-sm p-1 text-white">
        <div v-show="mode === 0" class="row justify-content-sm-center">
        <button @click="toggleWPN(0)" :class="modes[mode].value[0]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">Knife<br><img class="img-fluid" width="80" src="./../assets/knife.jpg"></button>
        <button @click="toggleWPN(1)" :class="modes[mode].value[1]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">M1911A1<br><img class="img-fluid" width="80" src="./../assets/m1911a1.jpg"></button>
        <button @click="toggleWPN(2)" :class="modes[mode].value[2]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">USSOCOM<br><img class="img-fluid" width="80" src="./../assets/ussocom.jpg"></button>
        <button @click="toggleWPN(3)" :class="modes[mode].value[3]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">M590 Shotgun<br><img class="img-fluid" width="130" src="./../assets/m590.jpg"></button>
        <button @click="toggleWPN(4)" :class="modes[mode].value[4]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">Micro Uzi<br><img class="img-fluid" width="80" src="./../assets/microuzi.jpg"></button>
        <button @click="toggleWPN(5)" :class="modes[mode].value[5]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">M3A1<br><img class="img-fluid" width="130" src="./../assets/m3a1.jpg"></button>
        <button @click="toggleWPN(6)" :class="modes[mode].value[6]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">USAS12<br><img class="img-fluid" width="130" src="./../assets/usas12.jpg"></button>
        <button @click="toggleWPN(7)" :class="modes[mode].value[7]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">M4<br><img class="img-fluid" width="130" src="./../assets/m4.jpg"></button>
        <button @click="toggleWPN(8)" :class="modes[mode].value[8]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">AK74<br><img class="img-fluid" width="130" src="./../assets/ak74.jpg"></button>
        <button @click="toggleWPN(9)" :class="modes[mode].value[9]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">MSG90A1 Sniper<br><img class="img-fluid" width="130" src="./../assets/sniper.jpg"></button>
        <button @click="toggleWPN(10)" :class="modes[mode].value[10]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">M60 Machinegun<br><img class="img-fluid" width="130" src="./../assets/m60.jpg"></button>
        <button @click="toggleWPN(11)" :class="modes[mode].value[11]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">MM1 Grenade Launcher<br><img class="img-fluid" width="130" src="./../assets/mm1.jpg"></button>
        <button @click="toggleWPN(12)" :class="modes[mode].value[12]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">RPG-7 Rocket Launcher<br><img class="img-fluid" width="130" src="./../assets/rpg7.jpg"></button>
        <button @click="toggleWPN(14)" :class="modes[mode].value[14]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">M84 Flash<br><img class="img-fluid" width="80" src="./../assets/m84.jpg"></button>
        <button @click="toggleWPN(18)" :class="modes[mode].value[18]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">SMOH92 Frag<br><img class="img-fluid" width="80" src="./../assets/smohg92.jpg"></button>
        <button @click="toggleWPN(19)" :class="modes[mode].value[19]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">ANM14 Fire<br><img class="img-fluid" width="80" src="./../assets/anm14.jpg"></button>
        <button @click="toggleWPN(20)" :class="modes[mode].value[20]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">M15 Smoke<br><img class="img-fluid" width="80" src="./../assets/m15.jpg"></button>
        </div>
        <div v-show="mode == 1" class="row justify-content-sm-center">
            <button @click="toggleWPN(0)" :class="modes[mode].value[0]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">RPG-7 Rocket Launcher<br><img class="img-fluid" width="130" src="./../assets/rpg7.jpg"></button>
            <button @click="toggleWPN(1)" :class="modes[mode].value[1]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">M4<br><img class="img-fluid" width="130" src="./../assets/m4.jpg"></button>
            <button @click="toggleWPN(2)" :class="modes[mode].value[2]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">MM1 Grenade Launcher<br><img class="img-fluid" width="130" src="./../assets/mm1.jpg"></button>
        </div>
        <div v-show="mode == 2" class="row justify-content-sm-center">
        <button @click="toggleWPN(0)" :class="modes[mode].value[0]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">SMOH92 Frag<br><img class="img-fluid" width="80" src="./../assets/smohg92.jpg"></button>
        <button @click="toggleWPN(1)" :class="modes[mode].value[1]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">M84 Flash<br><img class="img-fluid" width="80" src="./../assets/m84.jpg"></button>
        <button @click="toggleWPN(2)" :class="modes[mode].value[2]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">M15 Smoke<br><img class="img-fluid" width="80" src="./../assets/m15.jpg"></button>
        <button @click="toggleWPN(3)" :class="modes[mode].value[3]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">ANM14 Fire<br><img class="img-fluid" width="80" src="./../assets/anm14.jpg"></button>
        </div>
        <div v-show="mode == 3" class="row justify-content-sm-center">
            <button @click="toggleWPN(0)" :class="modes[mode].value[0]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">MDN11 Box<br><img class="img-fluid" width="80" src="./../assets/mdn11.jpg"></button>
            <button @click="toggleWPN(1)" :class="modes[mode].value[1]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">F1 Teleport<br><img class="img-fluid" width="80" src="./../assets/smohg92.jpg"></button>
            <button @click="toggleWPN(2)" :class="modes[mode].value[2]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">L2A2 Uppercut<br><img class="img-fluid" width="80" src="./../assets/mdn11.jpg"></button>
            <button @click="toggleWPN(3)" :class="modes[mode].value[3]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">invisibility Goggles<br><img class="img-fluid" width="80" src="./../assets/nightvision.jpg"></button>
            <button @click="toggleWPN(4)" :class="modes[mode].value[4]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">Briefcase<br><img class="img-fluid" width="80" src="./../assets/briefcase.jpg"></button>
            <button @click="toggleWPN(5)" :class="modes[mode].value[5]? 'btn-outline-warning':'btn-outline-secondary'" class="btn text-white mb-2 col-sm-2 bg-black mx-2">M67 ? Grenade<br><img class="img-fluid" width="80" src="./../assets/m67.jpg"></button>
        </div>
        <div class="d-grid mt-2 mb-5 d-md-flex gap-3 justify-content-sm-center">
        <button @click="all(2)" class="btn btn-outline-warning btn-lg">Select All</button>
        <button @click="all(0)" class="btn btn-outline-warning btn-lg">Deselect All</button>
        </div>
        <div class="mb-3 d-grid d-md-flex gap-3 justify-content-sm-center">
        <button @click="copy()" class="btn-lg btn text-white btn-primary">Copy</button>
        <button @click="output()" class="btn-lg btn text-white btn-success">Output</button>
        <button @click="clear()" class="btn-lg btn text-white btn-danger">Clear</button>
        </div>
        <textarea ref="output" id="output" rows="4" class="form-control bg-black text-white"></textarea>
    </div>
  </div>
</div>
    <hr>
    </div>
</template>

<script>
export default {
    name: "AvaWpns",
    data()
    {
        return {
            mode: 0,
            modes:
            [
                {name:"availableWeapons", value:[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
                {name:"hideSeek_Weapons", value:[0,0,0]},
                {name:"hideSeek_Nades", value:[0,0,0,0]},
                {name:"hideSeek_Extra", value:[0,0,0,0,0,0]}
            ]
        };
    },
    methods:
    {
        output()
        {
            document.getElementById("output").value += this.modes[this.mode].name+" \""+this.modes[this.mode].value.join("")+"\"\n"
        },

        toggleWPN(idx)
        {
            if(this.modes[this.mode].value[idx] === 2)
            {
                this.modes[this.mode].value[idx] = 0
            }
            else
            {
                this.modes[this.mode].value[idx] = 2
            }
        },

        clear()
        {
            document.getElementById("output").value = null
        },

        copy()
        {
            const output = document.getElementById("output")
            output.select()
            output.setSelectionRange(0, 99999)
            navigator.clipboard.writeText(output.value);
        },

        all(toggle)
        {
            for(let i = 0; i < this.modes[this.mode].value.length; i++)
            {
                this.modes[this.mode].value[i] = toggle;
            }
            if(this.mode == 0){this.modes[this.mode].value[13] = this.modes[this.mode].value[15] = this.modes[this.mode].value[16] = this.modes[this.mode].value[17] = 0;}
        }
    }
}
</script>