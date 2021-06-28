<template>
    <v-container>
        <v-row>
            <v-col
                cols="12"
            >
           
                <v-card
                    dark
                    class="pa-4"
                    outlined                    
                >
                    <!-- Cpu:<input type="text" v-model="cpuSocket"><br>
                    Mb:<input type="text" v-model="mbSocket"> -->
                    
                    <div
                        v-for="item, index in items" :key="index"
                    >   
                        <div class="text-overline mt-2 text-center d-flex align-center justify-space-between ">
                            {{item.title}}
                            <v-tooltip top v-if="item.imp">
                                <template #activator="data">
                                    <v-btn v-on="data.on" fab text x-small color="warning"><v-icon>mdi-information</v-icon></v-btn>
                                </template>
                                Выжный элемент для сборки
                            </v-tooltip>
                        </div>
                        <v-card>
                            <v-card-actions v-if="!item.selected" 
                                class="deep-purple accent-6 white--text "
                            >
                                    <v-alert
                                        v-if="item.title == 'ОЗУ' && items[0].selected == false"
                                        border="left"
                                        type="error"
                                        
                                    >
                                        Сначала выберите Процессор
                                    </v-alert>

                                    <v-alert
                                        v-else-if="item.title == 'Охлаждение' && items[0].selected == false"
                                        border="left"
                                        type="error"
                                        
                                    >
                                        Сначала выберите Процессор
                                    </v-alert>
                            
                                <v-card-actions v-else class="d-flex flex-column">
                                    <btn 
                                        class="square_btn"
                                        text
                                        absolute
                                        @click="itemClicked(item)"
                                    >
                                        <span class="text-h6 mb-1" >
                                            {{item.altText}}
                                        </span>
                                    </btn>
                                </v-card-actions>
                            </v-card-actions>
                            
                            <!-- ===============================   ================================================== -->

                            <div v-else >
                                <v-container>
                                    <v-row>
                                        <v-col
                                            cols="12"
                                        >
                                            <v-card 
                                                class="pa-2 light-blue accent-4 white--text"
                                            >
                                                <v-card-title class="text-overline" >
                                                    <v-btn class="mr-2"
                                                        @click="itemClicked(item)"
                                                    >
                                                        <v-icon left>mdi-pencil</v-icon> Заменить
                                                    </v-btn>

                                                    <v-btn
                                                        color="error"
                                                        @click="deleteItem(item)"
                                                    >
                                                        <v-icon>mdi-delete</v-icon> Убрать
                                                    </v-btn>
                                                    
                                                    <v-card-actions  v-if="item.title == 'ОЗУ'">

                                                        <v-card-text class="mb-1 text-body-2">
                                                            <span class="">Количество:  {{ramCounter}}</span>
                                                        </v-card-text>
                                                    
                                                        
                                                            <v-btn 
                                                                small
                                                                class="success"
                                                                @click="ramCalc('add')"
                                                            >
                                                                +
                                                            </v-btn>
                                                            <v-btn 
                                                                small
                                                                class="error"
                                                                @click="ramCalc('rem')"
                                                            >
                                                                -
                                                            </v-btn>
                                                        
                                                    </v-card-actions>
                                                </v-card-title>
                                                
                                                
                                                <v-card-item-title class="text-h6 mb-1">
                                                    {{item.slcItem.name}}
                                                </v-card-item-title>

                                                <span 
                                                    class="d-block pa-2 black white--text" 
                                                > 
                                                    <span>Цена:</span> {{ item.slcItem.price}} сом 
                                                </span>       
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </div>
                        </v-card>
                    </div>
                </v-card>
            <v-dialog
                v-model="dialog"
                max-width="900"
            >

            <v-card>
                <v-card-title class="text-h5 grey lighten-2"  >
                    {{model.title}}
                    <v-spacer></v-spacer>
                    <v-card-actions>
                        <span class="text--h5 item_count red--text" >    
                            <span class="blue-grey--text">Количество: </span>{{getItems.length}}
                        </span>
                    </v-card-actions>
                </v-card-title>
                        
                <v-item-group>
                    <v-container>
                        <v-row>
                            <v-col
                            v-for="item, index in getItems" :key="index"
                                cols="12"
                                sm="4"
                            >   
                            
                            <v-item>
                                <v-card
                                   
                                >   
                                    <v-img
                                        :src="item.imgSrc"
                                        height="250px"
                                    ></v-img>

                                    <v-card-title
                                        class="text-h5 mb-1"
                                    >
                                      {{item.name}}
                                    </v-card-title>

                                    <v-card-subtitle 
                                        class="indigo--text text-end"
                                    >
                                      Цена: {{item.price}}
                                    </v-card-subtitle>
                                    
                                    <v-divider></v-divider>
                                    
                                    <v-card-actions>
                                        <v-btn
                                            color="indigo"
                                            block
                                            dark
                                            @click="addItem(item, index)"
                                        >
                                            Добавить
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-item>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-item-group>
                <v-divider></v-divider>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click="dialog = false"
                >
                    Закрыть
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
            </v-col>
            <v-col>
                <v-card 
                color=""
            >
                <v-card-title>
                    Цена: <span class="orange--text lighten-4">
                          {{calcPrice}}
                    </span>
                    <v-spacer></v-spacer>
                    <v-card-actions>
                        <v-btn 
                            @click="fileSave"
                        >
                            Печатать
                        </v-btn>

                    </v-card-actions>
                </v-card-title>
                
            </v-card>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script>
import { saveAs } from 'file-saver';

export default {
    data() {
        return {
            cpus:[],mbs:[],ram:[],vd:[],ssd:[],hdd:[],cooler:[],case:[],
            cpuSocket:'',
            mbSocket:'',
            mbRamCount:'',
            totalPrice:{cpu:0,mb:0,ram:0,vd:0,ssd:0,hdd:0,cooler:0,case:0},
            priceForTxt:0,
            content:0,
            ramCounter:1,
            forSave:``,            
            model:{
                title:'',
                text:'',
            },
            dialog:false,
            items:[
                {imp:true,title:'Процессор',selected:false, altText:'Выбрать Процессор',type:'cpu',slcItem:{name:'',price:0}},
                {imp:true,title:'Мат. Плата',selected:false,altText:'Выбрать Материнскую плату',type:'mbs',slcItem:{name:'',price:0}},
                {imp:true,title:'ОЗУ',selected:false,altText:'Выбрать ОЗУ',type:'ram',slcItem:{name:'',price:0}},
                {title:'Видеокарта',selected:false,altText:'Выбрать Видеокарту',type:'vd',slcItem:{name:'',price:0}},
                {title:'SSD',selected:false,altText:'Выбрать SSD',type:'ssd',slcItem:{name:'',price:0}},
                {title:'Жесткий диск',selected:false,altText:'Выбрать Жесткий диск',type:'hdd',slcItem:{name:'',price:0}},
                {imp:true,title:'Охлаждение',selected:false,altText:'Выбрать Охлаждение',type:'cooler',slcItem:{name:'',price:0}},
                {title:'Корпус',selected:false,altText:'Выбрать Корпус',type:'case',slcItem:{name:'',price:0}}
            ]
        }
    },
    methods: {
        fileSave(){
            let message = `\t\t\t\t\t\tПРОЦЕССОР\nНазвание->${this.items[0].slcItem.name+'\nЦена->'+this.items[0].slcItem.price}\nАтрибут:${this.items[0].slcItem.id}\n
            \t\t\t\t\t\tМАТЕРИНСКАЯ ПЛАТА\nНазвание->${this.items[1].slcItem.name+'\nЦена->'+this.items[1].slcItem.price}\nАтрибут:${this.items[1].slcItem.id}\n
            \t\t\t\t\t\tОПЕРАТИВНАЯ ПАМЯТЬ\nНазвание->${this.items[2].slcItem.name+'\nЦена->'+this.items[2].slcItem.price}\nКоличество:${this.ramCounter}\nАтрибут:${this.items[2].slcItem.id}\n
            \t\t\t\t\t\tВИДЕОКАРТА \nНазвание->${this.items[3].slcItem.name+'\nЦена->'+this.items[3].slcItem.price}\nАтрибут:${this.items[3].slcItem.id}\n
            \t\t\t\t\t\tSSD\nНазвание->${this.items[4].slcItem.name+'\nЦена->'+this.items[4].slcItem.price}\nАтрибут:${this.items[4].slcItem.id}\n
            \t\t\t\t\t\tЖЕСТКИЙ ДИСК\nНазвание->${this.items[5].slcItem.name+'\nЦена->'+this.items[5].slcItem.price}\nАтрибут:${this.items[5].slcItem.id}\n
            \t\t\t\t\t\tОХЛАЖДЕНИЕ\nНазвание->${this.items[6].slcItem.name+'\nЦена->'+this.items[6].slcItem.price}\nАтрибут:${this.items[6].slcItem.id}\n
            \t\t\t\t\t\tКОРПУС\nНазвание->${this.items[7].slcItem.name+'\nЦена->'+this.items[7].slcItem.price}\nАтрибут:${this.items[7].slcItem.id}\n
            ----------------------->Итого: ${this.priceForTxt}---------------------------
            `

            let file = new Blob([message], { type: 'text/plain;charset=utf-8' });
            saveAs(file, `test${Date.now()}.txt`)
        },
        ramCalc(num){
            let temp = this.items[2].slcItem.price;
             
            if (num == 'add') {
                if (this.items[1].slcItem.ramCount == '4XDDR4') {
                    if(this.ramCounter<4){
                        this.ramCounter+=1
                        this.totalPrice.ram += temp
                    }
                    this.$store.dispatch('clearError')
                }else if(this.items[1].slcItem.ramCount == '2XDDR4'){
                    if(this.ramCounter<2){
                        this.ramCounter+=1
                        this.totalPrice.ram += temp
                    }
                    this.$store.dispatch('clearError')
                }else{
                    this.$store.dispatch('setError', 'Добавьте Материнскую плату')
                }
            }else if (num == 'rem') {
               if(this.ramCounter>1){
                        this.ramCounter-=1
                        this.totalPrice.ram -= temp
                } 
            }
        },
        deleteItem(item){
            item.selected = false
            item.slcItem = {name:'',price:0}
            if(item.type == 'cpu'){
                this.cpuSocket = ''
                this.totalPrice.cpu = 0
            }else if(item.type == 'mbs'){
                this.mbSocket = ''
                this.totalPrice.mb = 0
            }else if(item.type == 'ram'){
                this.ramCounter = 1
                this.totalPrice.ram = 0
            }else if(item.type == 'vd'){
                this.totalPrice.vd = 0
            }else if(item.type == 'ssd'){
                this.totalPrice.ssd = 0
            }else if(item.type == 'hdd'){
                this.totalPrice.hdd = 0
            }else if(item.type == 'cooler'){
                this.totalPrice.cooler = 0
            }else if(item.type == 'case'){
                this.totalPrice.case = 0
            }
        },
        addItem(item){ 
            
            if(item.type == 'cpu'){

                const id = this.cpus.findIndex(x => x.id == item.id);
                this.items[0].slcItem = this.cpus[id]
                this.cpuSocket = this.items[0].slcItem.socket
                this.totalPrice.cpu = this.items[0].slcItem.price

            }else if(item.type == 'mbs'){    
                const id = this.mbs.findIndex(x => x.id == item.id);
                this.items[1].slcItem = this.mbs[id]
                this.mbSocket = this.items[1].slcItem.socket 
                this.totalPrice.mb = this.items[1].slcItem.price
                            
            }else if(item.type == 'ram'){    
                
                const id = this.ram.findIndex(x => x.id == item.id);
                this.items[2].slcItem = this.ram[id]
                this.totalPrice.ram = this.items[2].slcItem.price
            
            }else if(item.type == 'vd'){    

                const id = this.vd.findIndex(x => x.id == item.id);
                this.items[3].slcItem = this.vd[id]
                this.totalPrice.vd = this.items[3].slcItem.price
                
            }else if(item.type == 'ssd'){    
                
                const id = this.ssd.findIndex(x => x.id == item.id);
                this.items[4].slcItem = this.ssd[id]
                this.totalPrice.ssd = this.items[4].slcItem.price
                
            }else if(item.type == 'hdd'){    
                
                const id = this.hdd.findIndex(x => x.id == item.id);
                this.items[5].slcItem = this.hdd[id]
                this.totalPrice.hdd = this.items[5].slcItem.price
                
            }else if(item.type == 'cooler'){    
                
                const id = this.cooler.findIndex(x => x.id == item.id);
                this.items[6].slcItem = this.cooler[id]
                this.totalPrice.cooler = this.items[6].slcItem.price
                
            }else if(item.type == 'case'){    
                
                const id = this.case.findIndex(x => x.id == item.id);
                this.items[7].slcItem = this.case[id]
                this.totalPrice.case = this.items[7].slcItem.price
                
            }

            this.items.forEach(el => {
                if(el.slcItem.price != '') {
                    el.selected = true                
                }
            });

            this.dialog = false
        },
        itemClicked(item){
            this.model.title = item.title
            this.model.text = item.altText
            this.dialog = true
            if(item.title == 'Процессор'){
                this.content = 0
                console.log('content = ', this.content);
            }else if(item.title == 'Мат. Плата'){
                this.content = 1
                console.log('content = ', this.content);
            }else if(item.title == 'ОЗУ'){
                this.content = 2
                console.log('content = ', this.content);
            }else if(item.title == 'Видеокарта'){
                this.content = 3
            }else if(item.title == 'SSD'){
                this.content = 4
            }else if(item.title == 'Жесткий диск'){
                this.content = 5
            }else if(item.title == 'Охлаждение'){
                this.content = 6
            }else if(item.title == 'Корпус'){
                this.content = 7
            }else{
                this.content = -1
            }
        }
    },
    computed:{
        calcPrice(){
            let count = 0;
            for (const key in this.totalPrice) {
                if (Object.hasOwnProperty.call(this.totalPrice, key)) {
                    const element = this.totalPrice[key];
                    count += element
                }
            }
            this.priceForTxt = count
            return count
        },
        getItems(){
            if(this.content == 0){
                this.cpus = this.$store.getters.getAllCpu
                if(this.mbSocket!=''){
                    return this.$store.getters.getAllCpu.filter(t=>t.socket == this.mbSocket)
                }
                return this.$store.getters.getAllCpu

            }else if(this.content == 1){
                this.mbs = this.$store.getters.getAllMb
                if(this.cpuSocket!=''){
                    return this.$store.getters.getAllMb.filter(t=>t.socket == this.cpuSocket)
                }
                return this.$store.getters.getAllMb
            }else if(this.content == 2){
                this.ram = this.$store.getters.getAllRam
                return this.$store.getters.getAllRam    
            }else if(this.content == 3){
                this.vd = this.$store.getters.getAllVd
                return this.$store.getters.getAllVd  
            }else if(this.content == 4){
                this.ssd = this.$store.getters.getAllSsd
                return this.$store.getters.getAllSsd    
            }else if(this.content == 5){
                this.hdd = this.$store.getters.getAllHdd
                return this.$store.getters.getAllHdd
            }else if(this.content == 6){
                this.cooler = this.$store.getters.getAllCooler
                return this.$store.getters.getAllCooler
            }else if(this.content == 7){
                this.case = this.$store.getters.getAllCase
                return this.$store.getters.getAllCase
            }
            return 0
        },
    }
}
</script>

<style>
.item_count{
    border: 1px solid gray;
    padding: 3px;
    border-radius: 3px;
    margin-bottom: 2px;
}

.square_btn {
    padding: 0.3em 1em;
    text-decoration: none;
    color: white;
    border: solid 2px #67c5ff;
    border-radius: 3px;
    transition: .4s;
    word-wrap:break-all;
}

.square_btn:hover {
    background: #67c5ff;
    color: white;
}


</style>