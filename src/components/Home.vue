<template>
    <div class='body'>
        <!-- a -->
        <v-container grid-list-lg>
            <v-row>
                 <v-col cols="12">
                     <v-container>
                        <v-card>
                            <v-row no-gutters align="center">
                                <v-col>
                                    <v-carousel                                                
                                        continuous="false"
                                        hide-delimiters
                                        :show-arrows="false"
                                        hide-delimiter-background
                                    >
                                        <v-carousel-item>
                                            <v-row
                                                class="fill-height"
                                            >
                                                <v-img :src="'https://avatars.mds.yandex.net/get-zen_doc/2804475/pub_5ecd280586f1b20910b063c4_5ecd4d35710c162dc70d8722/scale_1200'" gradient="to top right, rgba(100,115,201,.53), rgba(25,32,72,1)">
                                                    <v-col align="center">
                                                        <div class="white--text pa-10">
                                                            <h1 class="mt-5">Конфигуратор ПК</h1>
                                                            <p style="font-size: 1.6rem" class="mt-10" >
                                                                Конфигуратор системного блока поможет подобрать комплектацию ПК и проверить комплектующие на совместимость. Выбирайте, сравнивайте характеристики, заказывайте дополнительные опции для создания конфигурации своей мечты!
                                                            </p>
                                                            <v-btn class="mt-4"
                                                            color="error"
                                                            dark
                                                            elevation="10"
                                                            rounded
                                                            x-large
                                                            :to="'/builder'"
                                                            >
                                                                Собрать
                                                            </v-btn>
                                                        </div>
                                                    </v-col>
                                                </v-img>
                                            </v-row>
                                        </v-carousel-item>
                                    </v-carousel>
                                </v-col>
                                <v-col>
                                    <v-carousel
                                        cycle
                                        hide-delimiter-background
                                        show-arrows-on-hover
                                    >
                                        <v-carousel-item v-for="item, index in images" :key="index">
                                            <v-row 
                                                class="fill-height"
                                            >
                                                <v-img :src="item.src"></v-img>
                                            </v-row>
                                        </v-carousel-item>
                                    </v-carousel>
                                </v-col>
                            </v-row>
                         </v-card>
                         
                     </v-container>
                 </v-col>
            </v-row>
        </v-container>
        <!-- <v-container grid-list-lg>
            <v-layout
                row
                wrap
            >
                <v-flex
                    xs-12
                    sm6
                    md4
                    v-for="pc,i in completePc" :key="i"
                >
                    <v-card
                        elevation="2"
                        max-width="374"
                        dark
                    >
                        <v-img
                            height="400"
                            :src="pc.image"
                        ></v-img>
                        <v-card-title>
                            {{pc.title}}
                        </v-card-title>
                        <v-card-subtitle>
                            <span>{{pc.price}} сом</span>
                        </v-card-subtitle>
                        <v-card-text>
                            {{pc.description}}
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color='info' :to="'/builder=' + pc.id">Изменить</v-btn>                        
                        </v-card-actions>
                    </v-card>  
                </v-flex>
            </v-layout>
        </v-container> -->

    </div>
</template>

<script>
export default {
    data() {
        return {
            images:[
                {src:'https://3dnews.ru/assets/external/illustrations/2019/09/13/994012/intro.jpg'},
                {src:'https://geekculture.co/wp-content/uploads/2020/07/aftershock-trixel-custom-pc-1.jpg'},
                {src:'https://www.iguides.ru/upload/iblock/ab4/ab462855f6a300699cfeeb0c2cc27663.jpg'}
                
            ]
        }
    },
}
</script>
