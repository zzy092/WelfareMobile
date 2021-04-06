<template>
<div id="defaultwap">
  <div v-if=" defAddress!=undefined && Object.keys(defAddress).length!==0">
    <div>
      <div>{{defAddress.address_user_name}}</div>
      <div>{{defAddress.address_phone}}</div>
    </div>
    <div>
      <div>{{address}}</div>
    </div>
  </div>
  <div v-else>
    <button>新增收获地址</button>
  </div>
</div>
</template>

<script>
export default {
name:"DefAddressWrap",
props:{
  defAddress:{
    typeof:Object
  }
},
computed:{
  address(){
    return this.defAddress.province_name+this.defAddress.city_name+this.defAddress.county_name+this.defAddress.town_name+this.defAddress.customer_address
  }
}
}
</script>

<style scoped>

</style>
