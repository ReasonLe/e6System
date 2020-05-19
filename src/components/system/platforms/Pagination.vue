<template>
	<div class="block" :style="{width:parseInt(pw)>1150?'1150px':pw}">
	    <el-pagination
				:pager-count="11"
				:background="true"
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="1"
	      :page-sizes="[10]"
	      :page-size="10"
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="($store.state.categories.length-1)*10+$store.state.categories[$store.state.categories.length-1].length">
	    </el-pagination>
	 </div>
</template>

<script>
	export default {
	  methods: {
	    handleSizeChange(val) {
	      console.log(`每页 ${val} 条`);
	    },
	    handleCurrentChange(val) {
				this.$emit("pageChange",val)
	    }
	  },
		props: {
			pw: String
		}
	}
</script>

<style>
	.block {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px 0;
		background-color: #fff;
	}
</style>