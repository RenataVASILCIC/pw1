const barb = (name, model, vendor_code, manufacturer, price,sale, phone, image) => ({name, model, vendor_code, manufacturer, price, sale, phone, image})
const log = (text,type,sum, date = new Date()) => ({text,type,sum,date})
const barbie = [
    barb('Ballerine', 'Barbie', 'FGK95', 'MATTEL (USA)','349','25', '+373 457 126 36', 'img/ballerina.jpg'),
    barb('Bride', 'Barbie', 'MNO89', 'MATTEL (USA)','476 ','10', '+373 654 126 21', 'img/bride.jpg'),
    barb('Groom', 'Barbie', 'BPR56', 'MATTEL (USA)','261 ','5', '+373 694 245 32', 'img/groom.jpg'),
    barb('Fairy', 'Barbie', 'BRT78', 'MATTEL (USA)','370 ','25', '+373 174 326 31', 'img/fairy.jpg'),
    barb('Flower magic', 'Barbie', 'CRW34', 'MATTEL (USA)','467 ','35', '+373 133 185 83', 'img/flower_magic.jpg'),
    barb('Flying', 'Barbie', 'BTP62', 'MATTEL (USA)','391 ','35', '+373 103 322 31', 'img/flying.jpg'),
    barb('Iris', 'Barbie', 'BRT48', 'MATTEL (USA)','350 ','50', '+373 623 116 17', 'img/iris.jpg'),
    barb('Mermaid', 'Barbie', 'VDT61', 'MATTEL (USA)','400 ','25', '+373 621 126 56', 'img/mermaid.jpg'),
    barb('Mermaild', 'Barbie', 'MOE01', 'MATTEL (USA)',' 260 ','5', '+373 834 923 13', 'img/mermaild.jpg'),
    barb('Princess', 'Barbie', 'BSH83', 'MATTEL (USA)','500 ','10', '+373 494 126 31', 'img/princess.jpg'),


]
new Vue({
    el: '#app',
    data: {
        barbie: barbie,
        barb: barbie[0],
        logs: [],
        selectedBarbIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectBarb(index) {
            this.barb = barbie[index]
            this.selectedBarbIndex = index
        },
        newOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Succes order: ${this.barb.name} - ${this.barb.model}`, 'ok', this.calculateDiscount(this.barb.price, this.barb.sale ))
            )
        },
        cancelOrder(){
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order: ${this.barb.name} - ${this.barb.model}`, 'cnl', this.calculateDiscount(this.barb.price, this.barb.sale ))
            )
        },
        calculateDiscount(sum, discount){
            console.log(sum)
            console.log(discount)
            let sumDiscounted = Number(sum)/100*(100 - Number(discount));
            return sumDiscounted;
            
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredBarbie() {
            return this.barbie.filter(barb => {
                return barb.name.indexOf(this.search) > -1 || barb.model.indexOf(this.search) > -1
            })
        }
    },
    filters:{
        date(value){
            return value.toLocaleString()
        }
    }
})