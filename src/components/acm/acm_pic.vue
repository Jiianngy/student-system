<template>
  <div>
    <div id="echarts_box" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default{
    data() {
    	return {

    	}
    },
    created() {},
    		// DOM 渲染完成触发
    // mounted() {
    // 	// 1. 基于准备好的dom，初始化echarts实例
    // 	var myChart = echarts.init(document.getElementById('echarts_box'))
    // 	// 2. 发起请求，获取数据
    // 	const { data: res } = await this.$http.get('reports/type/1')
    // 	if (res.meta.status !== 200) {
    // 		return this.$message.error('获取折线图数据失败！')
    // 	}
    // 	// 3. 使用刚指定的配置项和数据，显示图表
    // 	myChart.setOption(data)
    // }
  }
</script>

<style>
</style>
