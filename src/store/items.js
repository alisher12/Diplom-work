export default{
    state:{
        cpu:[
            // intel 3 - 9,10 поколений 
            {
                name:'Процессор Intel® Core™ i3-9350K (8 МБ кэш-памяти, тактовая частота до 4,60 ГГц)',
                socket:'LGA1151',
                cpuSpeed:'4.00GHZ-4.60GHZ',
                core:'4XCORES',
                price:15850,
                imgSrc:'https://cdn1.ozone.ru/s3/multimedia-2/c1200/6000056846.jpg',
                selected:false,
                type:'cpu',
                id:parseInt(Math.random() * 100000) 
            },
            {
                name:'Процессор Intel® Core™ i3-9100F (6 МБ кэш-памяти, тактовая частота до 4,20 ГГц)',
                socket:'LGA1151',
                cpuSpeed:'3.60GHZ-4.20GHZ',
                core:'4XCORES',
                price:10040,
                imgSrc:'https://cdn1.ozone.ru/s3/multimedia-2/c1200/6000056846.jpg',
                selected:false,
                type:'cpu',
                id:parseInt(Math.random() * 100000) 
            },
            {
                name:'Процессор Intel® Core™ i3-10305T (8 МБ кэш-памяти, тактовая частота до 4,00 ГГц)',
                socket:'LGA1200',
                cpuSpeed:'3.00GHZ-4.00GHZ',
                core:'4XCORES',
                price:8930,
                imgSrc:'https://alo.md/media/products/40753/0.png',
                selected:false,
                type:'cpu',
                id:parseInt(Math.random() * 100000) 
            },
            {
                name:'Процессор Intel® Core™ i3-10320 (8 МБ кэш-памяти, тактовая частота до 4,60 ГГц)',
                socket:'LGA1200',
                cpuSpeed:'3.80GHZ-4.60GHZ',
                core:'4XCORES',
                price:16600,
                imgSrc:'https://alo.md/media/products/40753/0.png',
                selected:false,
                type:'cpu',
                id:parseInt(Math.random() * 100000) 
            },
             // intel 5 - 9,10 поколений 
            {
                name:'Процессор Intel® Core™ i5-9500 (9 МБ кэш-памяти, тактовая частота до 4,40 ГГц)',
                socket:'LGA1151',
                cpuSpeed:'3.00GHZ-4.40GHZ',
                core:'6XCORES',
                price:16850,
                imgSrc:"https://hyperpc.ru/images/catalog/hardware/processors/rocket-lake/intel-core-i5f-11th.jpg",
                selected:false,
                type:'cpu',
                id:parseInt(Math.random() * 100000) 
            },
            {
                name:'Процессор Intel® Core™ i5-9400F (9 МБ кэш-памяти, до 4,10 ГГц)',
                socket:'LGA1151',
                cpuSpeed:'2.90GHZ-4.10GHZ',
                core:'6XCORES',
                price:12399,
                imgSrc:"https://hyperpc.ru/images/catalog/hardware/processors/rocket-lake/intel-core-i5f-11th.jpg",
                selected:false,
                type:'cpu',
                id:parseInt(Math.random() * 100000) 
            },
            {
                name:'Процессор Intel® Core™ i5-10400F (12 МБ кэш-памяти, до 4,30 ГГц)',
                socket:'LGA1200',
                cpuSpeed:'2.90GHZ-4.30GHZ',
                core:'6XCORES',
                price:14930,
                imgSrc:"https://hyperpc.ru/images/catalog/hardware/processors/rocket-lake/intel-core-i5f-11th.jpg",
                selected:false,
                type:'cpu',
                id:parseInt(Math.random() * 100000) 
            },
            {
                name:'Процессор Intel® Core™ i5-10400 (12 МБ кэш-памяти, до 4,30 ГГц)',
                socket:'LGA1200',
                cpuSpeed:'3.30GHZ-4.30GHZ',
                core:'4XCORES',
                price:14880,
                imgSrc:"https://hyperpc.ru/images/catalog/hardware/processors/rocket-lake/intel-core-i5f-11th.jpg",
                selected:false,
                type:'cpu',
                id:parseInt(Math.random() * 100000) 
            },
            //intel 7 - 9,10 поколений 
            {
                name:'Процессор Intel® Core™ i7-9700F (12 МБ кэш-памяти, до 4,70 ГГц)',
                socket:'LGA1151',
                cpuSpeed:'3.00GHZ-4.70GHZ',
                core:'8XCORES',
                price:21150,
                imgSrc:'https://hyperpc.ru/images/catalog/hardware/processors/rocket-lake/intel-core-i7f-11th.jpg',
                selected:false,
                type:'cpu',
                id:parseInt(Math.random() * 100000) 
            },
            {
                name:'Процессор Intel® Core™ i7-9700KF (12 МБ кэш-памяти, до 4,90 ГГц)',
                socket:'LGA1151',
                cpuSpeed:'3.60GHZ-4.90GHZ',
                core:'8XCORES',
                price:21000,
                imgSrc:'https://hyperpc.ru/images/catalog/hardware/processors/rocket-lake/intel-core-i7f-11th.jpg',
                selected:false,
                type:'cpu',
                id:parseInt(Math.random() * 100000) 
            },
            {
                name:'Процессор Intel® Core™ i7-10700 (16 МБ кэш-памяти, тактовая частота до 4,80 ГГц)',
                socket:'LGA1200',
                cpuSpeed:'2.90GHZ-4.80GHZ',
                core:'8XCORES',
                price:23940,
                imgSrc:'https://hyperpc.ru/images/catalog/hardware/processors/rocket-lake/intel-core-i7f-11th.jpg',
                selected:false,
                type:'cpu',
                id:parseInt(Math.random() * 100000) 
            },
            {
                name:'Процессор Intel® Core™ i7-10700F (16 МБ кэш-памяти, тактовая частота до 4,80 ГГц)',
                socket:'LGA1200',
                cpuSpeed:'2.90GHZ-4.80GHZ',
                core:'8XCORES',
                price:23990,
                imgSrc:'https://hyperpc.ru/images/catalog/hardware/processors/rocket-lake/intel-core-i7f-11th.jpg',
                selected:false,
                type:'cpu',
                id:parseInt(Math.random() * 100000) 
            },
            // AMD 
            {
                name:'Процессор AMD Ryzen 5 3500X (8 МБ кэш-памяти, тактовая частота до 4,10 ГГц)',
                socket:'AM4',
                cpuSpeed:'3.60GHZ-4.10GHZ',
                core:'6XCORES',
                price:11429,
                selected:false,
                imgSrc:'https://hyperpc.ru/images/catalog/hardware/processors/amd/am4/ryzen-3th/amd-ryzen-5.jpg',
                type:'cpu',
                id:parseInt(Math.random() * 100000) 
            },
            {
                name:'Процессор AMD Ryzen 7 3700X (16 МБ кэш-памяти, тактовая частота до 4,40 ГГц)',
                socket:'AM4',
                cpuSpeed:'3.60GHZ-4.40GHZ',
                core:'8XCORES',
                price:23694,
                imgSrc:'https://hyperpc.ru/images/catalog/hardware/processors/amd/am4/ryzen-5th/amd-ryzen-7-5800x.jpg',
                selected:false,
                type:'cpu',
                id:parseInt(Math.random() * 100000) 
            },
            {
                name:'Процессор AMD Ryzen 5 3600X (12 МБ кэш-памяти, тактовая частота до 4,40 ГГц)',
                socket:'AM4',
                cpuSpeed:'3.80GHZ-4.40GHZ',
                core:'6XCORES',
                price:16099,
                imgSrc:'https://hyperpc.ru/images/catalog/hardware/processors/amd/am4/ryzen-3th/amd-ryzen-5.jpg',
                selected:false,
                type:'cpu',
                id:parseInt(Math.random() * 100000) 
            },
            {
                name:'Процессор AMD Ryzen Threadripper 1900X (8 МБ кэш-памяти, тактовая частота до 4,00 ГГц)',
                socket:'AM4',
                cpuSpeed:'3.80GHZ-4.00GHZ',
                core:'6XCORES',
                price:11429,
                imgSrc:'https://hyperpc.ru/images/catalog/hardware/processors/amd/threadtipper/amd-ryzen-threadripper.jpg',
                selected:false,
                type:'cpu',
                id:parseInt(Math.random() * 100000) 
            },

        ],
        mb:[
            // 1151 intel 
           {
                name:'Материнская плата Gigabyte Z390-M LGA1151 mATX',
                socket:'LGA1151',
                ramCount:'4XDDR4',
                formFactor:'mATX',
                price: 11350,
                selected:false,
                imgSrc:"https://www.kivano.kg/images/product/81415/full/1594147126_79707400.png",
                type:'mbs',
                id:parseInt(Math.random() * 100000) 
            },
            {
                name:'Материнская плата Gigabyte H310M-D3H LGA1151v2 mATX',
                socket:'LGA1151',
                ramCount:'4XDDR4',
                formFactor:'mATX',
                price: 7210,
                selected:false,
                imgSrc:"https://www.kivano.kg/images/product/85004/full/1602711727_28265700.png",
                type:'mbs',
                id:parseInt(Math.random() * 100000) 
            },
            {
                name:'Материнская плата Asus Prime B360M-D LGA1151 ATX',
                socket:'LGA1151',
                ramCount:'2XDDR4',
                formFactor:'ATX',
                price: 7380,
                selected:false,
                imgSrc:"https://www.kivano.kg/images/product/74781/full/1574958065_45586000.png",
                type:'mbs',
                id:parseInt(Math.random() * 100000) 
            },
            // AM4 Ryzen 
            {
                name:'Материнская плата Gigabyte GA-A320M-S2H AM4 mATX',
                socket:'AM4',
                ramCount:'2XDDR4',
                formFactor:'mATX',
                price: 5690,
                selected:false,
                imgSrc:"https://www.kivano.kg/images/product/82837/full/1597653235_08104200.png",
                type:'mbs',
                id:parseInt(Math.random() * 100000) 
            },
            {
                name:'Материнская плата Gigabyte B550M Aorus Elite AM4 mATX',
                socket:'AM4',
                ramCount:'4XDDR4',
                formFactor:'mATX',
                price: 10640,
                selected:false,
                imgSrc:"https://www.kivano.kg/images/product/82840/full/1597658124_01660500.png",
                type:'mbs',
                id:parseInt(Math.random() * 100000) 
            },
            {
                name:'Материнская плата Gigabyte B550 DS3H AM4 mATX',
                socket:'AM4',
                ramCount:'4XDDR4',
                formFactor:'mATX',
                price: 9240,
                selected:false,
                imgSrc:"https://www.kivano.kg/images/product/82841/full/1597658844_38881800.png",
                type:'mbs',
                id:parseInt(Math.random() * 100000) 
            },
            {
                name:'Материнская плата Asus TUF Gaming B550M-Plus AM4 mATX',
                socket:'AM4',
                ramCount:'4XDDR4',
                formFactor:'mATX',
                price: 14680,
                selected:false,
                imgSrc:"https://www.kivano.kg/images/product/81911/full/1595484275_89067500.jpg",
                type:'mbs',
                id:parseInt(Math.random() * 100000) 
            },
            {
                name:'Материнская плата Asus TUF Gaming B550-Plus AM4 ATX',
                socket:'AM4',
                ramCount:'4XDDR4',
                formFactor:'ATX',
                price: 14510,
                selected:false,
                imgSrc:"https://www.kivano.kg/images/product/81909/full/1595483630_63401500.jpg",
                type:'mbs',
                id:parseInt(Math.random() * 100000)
            },
            // 1200 intel 
            {
                name:'Материнская плата Asus Prime H410M-CS LGA1200 mATX',
                socket:'LGA1200',
                ramCount:'2XDDR4',
                formFactor:'mATX',
                price: 8430,
                selected:false,
                imgSrc:"https://www.kivano.kg/images/product/91191/full/1619026776_65435000.jpg",
                type:'mbs',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Материнская плата MSI MAG Z490 TOMAHAWK LGA1200 ATX',
                socket:'LGA1200',
                ramCount:'4XDDR4',
                formFactor:'ATX',
                price: 20540,
                selected:false,
                imgSrc:"https://www.kivano.kg/images/product/91192/full/1619027610_64965900.png",
                type:'mbs',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Материнская плата MSI MAG Z490 GAMING PLUS LGA1200 ATX',
                socket:'LGA1200',
                ramCount:'4XDDR4',
                formFactor:'ATX',
                price: 19060,
                selected:false,
                imgSrc:"https://www.kivano.kg/images/product/91193/full/1619028155_97919300.png",
                type:'mbs',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Материнская плата MSI Z490-A PRO LGA1200 ATX',
                socket:'LGA1200',
                ramCount:'4XDDR4',
                formFactor:'ATX',
                price: 16870,
                selected:false,
                imgSrc:"https://www.kivano.kg/images/product/90686/full/1617361376_39466000.png",
                type:'mbs',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Материнская плата MSI MAG B460M Mortar LGA1200 mATX',
                socket:'LGA1200',
                ramCount:'4XDDR4',
                formFactor:'mATX',
                price: 14080,
                selected:false,
                imgSrc:"https://www.kivano.kg/images/product/90687/full/1617362085_99793000.png",
                type:'mbs',
                id:parseInt(Math.random() * 100000)
            }
            
        ],
        ram:[
            {
                name:'Оперативная память Zeppelin 4Gb DDR4 PC-19200',
                typeDDR:'DDR4',
                memory:'4GB',
                speed:'2400MHZ',
                price:1870,
                imgSrc:'https://www.kivano.kg/images/product/43861/full/1612437695_16788800.jpg',
                selected:false,
                type:'ram',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Оперативная память Zeppelin 8Gb DDR4 PC-19200',
                typeDDR:'DDR4',
                memory:'8GB',
                speed:'2400MHZ',
                price:1870,
                imgSrc:'https://www.kivano.kg/images/product/43861/full/1612437695_16788800.jpg',
                selected:false,
                type:'ram',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Модуль оперативной памяти Apacer 8GB DIMM DDR4 2400Mhz (EL.04G2T.KFH)',
                typeDDR:'DDR4',
                memory:'8GB',
                speed:'2400MHZ',
                price:4500,
                imgSrc:'https://www.kivano.kg/images/product/64291/full/1612235955_15952400.png',
                selected:false,
                type:'ram',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Модуль оперативной памяти Apacer 8GB DIMM DDR4 2400Mhz (EL.04G2T.KFH)',
                typeDDR:'DDR4',
                memory:'8GB',
                speed:'2400MHZ',
                price:4500,
                imgSrc:'https://www.kivano.kg/images/product/64291/full/1612235955_15952400.png',
                selected:false,
                type:'ram',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Модуль оперативной памяти Kingston HyperX Fury Black 8GB DDR4 3000MHz (HX430C15FB3/8)',
                typeDDR:'DDR8',
                memory:'8GB',
                speed:'3000MHZ',
                price:4900,
                imgSrc:'https://www.kivano.kg/images/product/83523/full/1599214665_99387000.jpg',
                selected:false,
                type:'ram',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Модуль оперативной памяти Teamgroup Delta TUF RGB 8GB DIMM DDR4 3200Mhz',
                typeDDR:'DDR4',
                memory:'8GB',
                speed:'3200MHZ',
                price:7120,
                imgSrc:'https://www.kivano.kg/images/product/90198/full/1616144677_87042100.jpg',
                selected:false,
                type:'ram',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Оперативная память Crucial BLS8G4D32AESBK 8GB DDR4 3200MHz',
                typeDDR:'DDR4',
                memory:'8GB',
                speed:'3200MHZ',
                price:4630,
                imgSrc:'https://www.kivano.kg/images/product/75916/full/1611917987_20019700.jpg',
                selected:false,
                type:'ram',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Модуль оперативной памяти Teamgroup T-Force Dark Red 8GB DIMM DDR4 2400Mhz',
                typeDDR:'DDR4',
                memory:'8GB',
                speed:'2400MHZ',
                price:5080,
                imgSrc:'https://www.kivano.kg/images/product/91023/full/1618570890_66990400.jpg',
                selected:false,
                type:'ram',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Модуль оперативной памяти Kingston HX432C16FB4/16 16GB DDR4 3200MHz',
                typeDDR:'DDR4',
                memory:'16GB',
                speed:'3200MHZ',
                price:8800,
                imgSrc:'https://www.kivano.kg/images/product/81416/full/1611915684_10087000.jpg',
                selected:false,
                type:'ram',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Модуль оперативной памяти Kingston Hyperx Fury RGB 16GB DIMM DDR4 3200Mhz (HX432C16FB4A)',
                typeDDR:'DDR4',
                memory:'16GB',
                speed:'3200MHZ',
                price:9410,
                imgSrc:'https://www.kivano.kg/images/product/87013/full/1608283586_35111900.jpg',
                selected:false,
                type:'ram',
                id:parseInt(Math.random() * 100000)
            },
        ],
        vd:[
            {
                name:'Видеокарта Afox GeForce GTX1050 2GB GDDR5 128 Bit',
                MemoryCount:'2GB',
                MemoryType:'GDDR5',
                pci:'3.0x16',
                memorySpeed:'128bit',
                price:17320,
                imgSrc:'https://www.kivano.kg/images/product/90186/full/1616134169_87298100.jpg',
                selected:false,
                type:'vd',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Видеокарта Asus GTX1650 4GB GDDR5 128bit (DUAL-GTX1650-4G)',
                MemoryCount:'4GB',
                MemoryType:'GDDR5',
                pci:'3.0x16',
                memorySpeed:'128bit',
                price:19490,
                imgSrc:'https://www.kivano.kg/images/product/75888/full/1578974008_60669300.jpg',
                selected:false,
                type:'vd',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Видеокарта MSI GeForce GTX1650 D6 GAMING X 4GB GDDR6 128bit',
                MemoryCount:'4GB',
                MemoryType:'GDDR5',
                pci:'3.0x16',
                memorySpeed:'128bit',
                price:45160,
                imgSrc:'https://www.kivano.kg/images/product/94450/full/1623912898_04167800.png',
                selected:false,
                type:'vd',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Видеокарта ASRock Radeon RX 6900 XT Phantom Gaming D OC 16GB (RX6900XT PGD 16GO), Retail',
                MemoryCount:'16GB',
                MemoryType:'GDDR6',
                pci:'3.0x16',
                memorySpeed:'128bit',
                price:168990,
                imgSrc:'https://avatars.mds.yandex.net/get-mpic/4034173/img_id2574126091270407679.png/orig',
                selected:false,
                type:'vd',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Видеокарта Palit GeForce RTX 3060 Dual OC 12 GB (NE63060T19K9-190AD)',
                MemoryCount:'12GB',
                MemoryType:'GDDR6',
                pci:'3.0x16',
                memorySpeed:'128bit',
                price:77990,
                imgSrc:'https://avatars.mds.yandex.net/get-mpic/5177817/img_id11625942219370129.png/13hq',
                selected:false,
                type:'vd',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Видеокарта GIGABYTE AORUS GeForce RTX 3070 MASTER 8G (rev. 1.0/1.1) (GV-N3070AORUS M-8GD)',
                MemoryCount:'8GB',
                MemoryType:'GDDR6',
                pci:'3.0x16',
                memorySpeed:'128bit',
                price:143919,
                imgSrc:'https://avatars.mds.yandex.net/get-mpic/4304063/img_id4764877358734864667.png/13hq',
                selected:false,
                type:'vd',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Видеокарта GIGABYTE GeForce RTX 2060 OC 6G (rev. 2.0) (GV-N2060OC-6GD)',
                MemoryCount:'6GB',
                MemoryType:'GDDR6',
                pci:'3.0x16',
                memorySpeed:'192bit',
                price:64150,
                imgSrc:'https://avatars.mds.yandex.net/get-mpic/3590777/img_id5280366087861170309.jpeg/13hq',
                selected:false,
                type:'vd',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Видеокарта ASUS TUF Gaming GeForce GTX 1660 SUPER OC 6GB (TUF-GTX1660S-O6G-GAMING)',
                MemoryCount:'6GB',
                MemoryType:'GDDR6',
                pci:'3.0x16',
                memorySpeed:'192bit',
                price:53490,
                imgSrc:'https://avatars.mds.yandex.net/get-mpic/4944925/img_id6177969718410129135.jpeg/13hq',
                selected:false,
                type:'vd',
                id:parseInt(Math.random() * 100000)
            }
        ],
        ssd:[
            {
                name:'SSD OSCOO 120GB OSC-SSD-001 SATA-3 2.5',
                memory:'120GB',
                imgSrc:'https://enter.kg/images/stories/virtuemart/product/oscoo-mlc-ssd-sata-3-2-5-inch-60gb-120gb-240gb-480gb-ssd-sata3-hard-drive_4476.jpg',
                price:2365,
                selected:false,
                type:'ssd',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'SSD PNY 120GB 7CS900-120-PB CS900 SATA-3 2.5',
                memory:'120GB',
                imgSrc:'https://enter.kg/images/stories/virtuemart/product/25-ssd-120gb-pny-cs900-sataiii-sequential-reads-515-mbs-sequential-writes-490-mbs-maximum-random-4k-read-86000-iops-write-81000-iops-thickness-7mm-controller-phison-ps3111-s11-3d-9359843689103_7266.jpg',
                price:2580,
                selected:false,
                type:'ssd',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'SSD CRUCIAL BX500 240GB 3D NAND 2,5"" SATAIII',
                memory:'240GB',
                imgSrc:'https://ssd.kg/upload/resize_cache/webp/iblock/c1e/c1efd6f0c5862b685715b75bc54f1893.webp',
                price:7000,
                selected:false,
                type:'ssd',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'SSD LEXAR 256Gb LNS100-256RB NS100 3D NAND SATA-3 2.5"',
                memory:'256GB',
                imgSrc:'https://www.lexar.com/wp-content/uploads/2018/09/NS100-02_600x500.png',
                price:4558,
                selected:false,
                type:'ssd',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'SSD CRUCIAL BX500 480GB 3D NAND 2,5"" SATAIII',
                memory:'480GB',
                imgSrc:'https://ssd.kg/upload/resize_cache/webp/iblock/c1e/c1efd6f0c5862b685715b75bc54f1893.webp',
                price:5289,
                selected:false,
                type:'ssd',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Твердотельный накопитель SSD 512GB Samsung MZ-76P512E 860 PRO SATA3 2.5"',
                memory:'512GB',
                imgSrc:'https://amazoncomp.az/wp-content/uploads/2018/04/91WcktnkAAL._SL1500_.jpg',
                price:11696,
                selected:false,
                type:'ssd',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'SSD ADATA SPECTRIX S40G 1TB M.2 PCI-E Read up:3500Mb/s,/Write up:1900Mb/s',
                memory:'1TB',
                imgSrc:'https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=DU102n2b1',
                price:15738,
                selected:false,
                type:'ssd',
                id:parseInt(Math.random() * 100000)
            },
            
        ],
        hdd:[
            {
                name:'SEAGATE 500GB BARACUDA SATA3 ST500DM009/ST500DM002',
                memory:'500GB',
                price:3063,
                imgSrc:'https://www.powerplanetonline.com/cdnassets/ST500DM009_l.jpg',
                selected:false,
                type:'hdd',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'TOSHIBA 2TB 7200RPM 64MB SATA3 DT01ACA200',
                memory:'2TB',
                price:4695,
                imgSrc:'https://enter.online/images/detailed/85/toshiba_hdd_hdwd120uzsva1.png',
                selected:false,
                type:'hdd',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'WD BLUE 500GB, 7200RPM, SATA3, WD5000AAKX',
                memory:'500GB',
                price:3020,
                imgSrc:'https://axsysmarket.ru/uploads/catalog/zhestkiy-disk-hdd-western-digital-blue-500-gb-3-5-wd5000azlx.jpg',
                selected:false,
                type:'hdd',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'TOSHIBA 2TB, 7200RPM, 64MB, SATA3, DT01ACA200',
                memory:'2TB',
                price:4678,
                imgSrc:'https://enter.online/images/detailed/85/toshiba_hdd_hdwd120uzsva1.png',
                selected:false,
                type:'hdd',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'ЖЕСТКИЙ ДИСК HDD 3TB TOSHIBA 7200RPM 64MB 3.5" [DT01ACA300]',
                memory:'3TB',
                price:6507,
                imgSrc:'https://shop.light.kg/upload/iblock/006/0066eac851e9e4932da32acf75fd4056.jpg',
                selected:false,
                type:'hdd',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Жесткий диск Western Digital WD Black 2 TB WD2003FZEX',
                memory:'2TB',
                price:9974,
                imgSrc:'https://items.s1.citilink.ru/851387_v01_b.jpg',
                selected:false,
                type:'hdd',
                id:parseInt(Math.random() * 100000)
            },
        ],
        cooler:[
            {
                name:'Кулер для процессора Deepcool CK-11508 черный',
                socket:'S1150/1151/1155/1156',
                rotateSpeed:2200,
                imgSrc:'https://www.kivano.kg/images/product/22291/22291_full.jpg',
                price:440,
                selected:false,
                type:'cooler',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Кулер для процессора Deepcool THETA 115',
                socket:'S1150/1151/1155/1156',
                rotateSpeed:1600,
                imgSrc:'https://www.kivano.kg/images/product/22304/full/1622384892_32512600.jpg',
                price:480,
                selected:false,
                type:'cooler',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Кулер для процессора Deepcool THETA 21',
                socket:'S1150/1151/1155/1156',
                rotateSpeed:2200,
                imgSrc:'https://www.kivano.kg/images/product/22307/full/1622397218_14696400.jpg',
                price:540,
                selected:false,
                type:'cooler',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Кулер для процессора Deepcool GAMMA ARCHER',
                socket:'S775, S1150/1151/1155/1156,AMD: AM2, AM2+, AM3/AM3+/FM1, S754, S939, S940',
                rotateSpeed:2200,
                imgSrc:'https://www.kivano.kg/images/product/22919/full/1622398611_32193800.jpg',
                price:640,
                selected:false,
                type:'cooler',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Кулер для процессора Deepcool GAMMAXX 300',
                socket:'LGA1366/LGA115X/LGA775; AMD: AM4/AM3+/AM3/AM2+/AM2/FM2+/FM2/FM1',
                rotateSpeed:1600,
                imgSrc:'https://www.kivano.kg/images/product/22921/full/1622390705_11544400.jpg',
                price:1590,
                selected:false,
                type:'cooler',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Кулер для процессора Deepcool Lucifer V2',
                socket:'Intel: S775, S1150/1151/1155/1156, S1356/1366, S2011; AMD: AM2, AM2+, AM3/AM3+/FM1, FM2/FM2+',
                rotateSpeed:3890,
                imgSrc:'https://www.kivano.kg/images/product/22301/full/1622368627_05815400.jpg',
                price:3890,
                selected:false,
                type:'cooler',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Кулер для процессора Deepcool NEPTWIN V2',
                socket:'Intel: S775, S1150/1151/1155/1156, S1356/1366, S2011; AMD: AM2, AM2+, AM3/AM3+/FM1, FM2/FM2+',
                rotateSpeed:3700,
                imgSrc:'https://www.kivano.kg/images/product/22929/full/1622391216_22409700.jpg',
                price:3700,
                selected:false,
                type:'cooler',
                id:parseInt(Math.random() * 100000)
            }
        ],
        case:[
            {
                name:'Корпус Qmax KB101B',
                formFactor:'ATX, micro-ATX, mini-ITX',
                price:1640,
                imgSrc:'https://www.kivano.kg/images/product/88842/full/1613023918_10533300.png',
                selected:false,
                type:'case',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Корпус Deepcool Macube 310 черный',
                formFactor:'ATX, micro-ATX, mini-ITX',
                price:6050,
                imgSrc:'https://www.kivano.kg/images/product/74764/full/1574933790_48648200.jpg',
                selected:false,
                type:'case',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Корпус Deepcool Tesseract BF черный',
                formFactor:'ATX, micro ATX',
                price:3700,
                imgSrc:'https://www.kivano.kg/images/product/24123/24123_full.jpg',
                selected:false,
                type:'case',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Корпус DeepCool Dukase V3 белый',
                formFactor:'ATX, micro-ATX, mini-ITX',
                price:1640,
                imgSrc:'https://www.kivano.kg/images/product/58600/full/1575097626_95867200.jpg',
                selected:false,
                type:'case',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Корпус Deepcool Matrexx 55 MESH ADD-RGB 4F черный',
                formFactor:'ATX, micro ATX, mini ITX',
                price:5800,
                imgSrc:'https://www.kivano.kg/images/product/78301/full/1585648440_08056700.jpg',
                selected:false,
                type:'case',
                id:parseInt(Math.random() * 100000)
            },
            {
                name:'Корпус Aerocool Shard черный',
                formFactor:'ATX, micro ATX, mini ITX',
                price:3400,
                imgSrc:'https://www.kivano.kg/images/product/69422/69422_full.png',
                selected:false,
                type:'case',
                id:parseInt(Math.random() * 100000)
            }
        ],
        

    },
    mutations:{
        
    },
    actions:{
        
    },
    getters:{
        getAllCpu(state){
            return state.cpu
        },
        getAllMb(state){
            return state.mb
        },
        getAllRam(state){
            return state.ram
        },
        getAllVd(state){
            return state.vd
        },
        getAllSsd(state){
            return state.ssd
        },
        getAllHdd(state){
            return state.hdd
        },
        getAllCooler(state){
            return state.cooler
        },
        getAllCase(state){
            return state.case
        }       
    }
}