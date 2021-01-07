var app = new Vue({
    el: '#app',
    data: {
        isActivePromo: {},
        isActiveContact: {},
        isActiveSelect: {},
        isActivePromo2: {
            display: 'none'
        },
        name: null,
        email: null,
        phone: null,
        adress: null,
        check: false,
        isActiveChoise1: {
            background: '#FFC369'
        },
        isActiveChoise2: {},
        isActiveChoise3: {},
        page: 1,
        price: 0,
        count1: 0,
        count2: 0,
        count3: 0,
        finalCount: 0,
        finalDescr: 'Бутыль 18,9 л',
        orderDay: 10,
        order10style : {
            background: '#FFC369',
            color: 'white'
        },
        order11style: {},
        order12style: {},
        order13style: {},
        order14style: {},
        order15style: {},
        order16style: {},
        order17style: {},
        wekeend: false,
        time1: {},
        time2 : {
            background: '#FFC369',
            color: 'white'
        },
        time3: {},
        finalTime: '12:00 - 13:00',
    },
    computed: {
        opacity(){
            return{
                opacity1: !this.name || !this.phone || !this.email || !this.adress || !this.check
            };
        },
        opacity2(){
            return{
                opacity1: !this.name || !this.phone || !this.email || !this.adress || !this.check || this.finalCount == 0
            };
        }
    },
    methods: {
        makeActiveChoise1(){
            this.isActiveChoise1 = {
                background: '#FFC369'
            };
            this.isActiveChoise2 = {
                background: '#E5E5E5'
            };
            this.isActiveChoise3 = {
                background: '#E5E5E5'
            };
            this.page = 1;
            this.price = 0;
            this.count2 = 0;
            this.count3 = 0;
            this.finalCount = 0;
            this.finalDescr = 'Бутыль 18,9 л';
        },
        makeActiveChoise2(){
            this.isActiveChoise1 = {
                background: '#E5E5E5'
            };
            this.isActiveChoise2 = {
                background: '#FFC369'
            };
            this.isActiveChoise3 = {
                background: '#E5E5E5'
            };
            this.page = 2;
            this.price = 0;
            this.count1 = 0;
            this.count3 = 0;
            this.finalCount = 0;
            this.finalDescr = '6 бутылок 1,5 л';
        },
        makeActiveChoise3(){
            this.isActiveChoise1 = {
                background: '#E5E5E5'
            };
            this.isActiveChoise2 = {
                background: '#E5E5E5'
            };
            this.isActiveChoise3 = {
                background: '#FFC369'
            };
            this.page = 3;
            this.price = 0;
            this.count1 = 0;
            this.count2 = 0;
            this.finalCount = 0;
            this.finalDescr = '12 бутылок 0,5 л';
        },
        changeToContact(){
            if(window.innerWidth <= 992){
                this.isActivePromo = {
                    display: 'none'
                };
                this.isActiveContact = {
                    display: 'block'
                };
                this.isActiveSelect = {
                    display: 'none'
                };
                this.isActivePromo2 = {
                    display: 'none'
                };
            }
            else{
                this.isActiveContact = {
                    display: 'block'
                };
                this.isActiveSelect = {
                    display: 'block'
                };
                this.isActivePromo2 = {
                    display: 'none'
                };
            }
        },
        changeToSelect(){
            if(window.innerWidth <= 992 && this.name != null && this.phone != null && this.email != null && this.adress != null && this.check){
                this.isActiveContact = {
                    display: 'none'
                };
                this.isActiveSelect = {
                    display: 'block'
                };
            }
        },
        changeToPromo2(){
            if(this.price != 0 && this.name != null && this.phone != null && this.email != null && this.adress != null && this.check){
                this.isActiveContact = {
                    display: 'none'
                };
                this.isActiveSelect = {
                    display: 'none'
                };
                this.isActivePromo2 = {
                    display: 'block'
                };
            }
        },
        count1Plus(){
            this.price += 220;
            this.count1++;
            this.finalCount++;
        },
        count2Plus(){
            this.price += 175;
            this.count2++;
            this.finalCount++;
        },
        count3Plus(){
            this.price += 270;
            this.count3++;
            this.finalCount++;
        },
        count1Minus(){
            if(this.price > 0){
                this.price -= 220;
                this.count1--;
                this.finalCount--;
            }
        },
        count2Minus(){
            if(this.price > 0){
                this.price -= 175;
                this.count2--;
                this.finalCount--;
            }
        },
        count3Minus(){
            if(this.price > 0){
                this.price -= 270;
                this.count3--;
                this.finalCount--;
            }
        },
        order10(){
            this.orderDay = 10;
            this.order10style = {
                background: '#FFC369',
                color: 'white'
            };
            this.order11style = {};
            this.order12style = {};
            this.order13style = {};
            this.order14style = {};
            this.order15style = {};
            this.order16style = {};
            this.order17style = {};
            this.wekeend = false;
        },
        order11(){
            this.orderDay = 11;
            this.order11style = {
                background: '#FFC369',
                color: 'white'
            };
            this.order10style = {};
            this.order12style = {};
            this.order13style = {};
            this.order14style = {};
            this.order15style = {};
            this.order16style = {};
            this.order17style = {};
            this.wekeend = false;
        },
        order12(){
            this.orderDay = 12;
            this.order12style = {
                background: '#FFC369',
                color: 'white'
            };
            this.order10style = {};
            this.order11style = {};
            this.order13style = {};
            this.order14style = {};
            this.order15style = {};
            this.order16style = {};
            this.order17style = {};
            this.wekeend = false;
        },
        order13(){
            this.orderDay = 13;
            this.order13style = {
                background: '#FFC369',
                color: 'white'
            };
            this.order10style = {};
            this.order11style = {};
            this.order12style = {};
            this.order14style = {};
            this.order15style = {};
            this.order16style = {};
            this.order17style = {};
            this.wekeend = false;
        },
        order14(){
            this.orderDay = 14;
            this.order14style = {
                background: '#FFC369',
                color: 'white'
            };
            this.order10style = {};
            this.order11style = {};
            this.order12style = {};
            this.order13style = {};
            this.order15style = {};
            this.order16style = {};
            this.order17style = {};
            this.wekeend = false;
        },
        order15(){
            this.orderDay = 15;
            this.order15style = {
                background: '#FFC369',
                color: 'white'
            };
            this.order10style = {};
            this.order11style = {};
            this.order12style = {};
            this.order13style = {};
            this.order14style = {};
            this.order16style = {};
            this.order17style = {};
            this.wekeend = true;
        },
        order16(){
            this.orderDay = 16;
            this.order16style = {
                background: '#FFC369',
                color: 'white'
            };
            this.order10style = {};
            this.order11style = {};
            this.order12style = {};
            this.order13style = {};
            this.order14style = {};
            this.order15style = {};
            this.order17style = {};
            this.wekeend = true;
        },
        order17(){
            this.orderDay = 17;
            this.order17style = {
                background: '#FFC369',
                color: 'white'
            };
            this.order10style = {};
            this.order11style = {};
            this.order12style = {};
            this.order13style = {};
            this.order14style = {};
            this.order15style = {};
            this.order16style = {};
            this.wekeend = false;
        },
        changeTimeOne(){
            this.time1 = {
                background: '#FFC369',
                color: 'white'
            };
            this.time2 = {};
            this.time3 = {};
            this.finalTime = '10:00 - 11:00';
        },
        changeTimeTwo(){
            this.time2 = {
                background: '#FFC369',
                color: 'white'
            };
            this.time1 = {};
            this.time3 = {};
            this.finalTime = '12:00 - 13:00';
        },
        changeTimeThree(){
            this.time3 = {
                background: '#FFC369',
                color: 'white'
            };
            this.time1 = {};
            this.time2 = {};
            this.finalTime = '15:00 - 16:00';
        },
    },
});