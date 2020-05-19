<template>
  <div class="box" :style="{width:w}" ref="box">
		<h4>平台分类</h4>
		<el-table
				ref='table'
		    :data="tableData"
				:border="true"
		    style="width: 100%;max-width: 1150px;"
		    max-height="500">
				<el-table-column
				  fixed
					type="selection"
					align="center"
				  width="50">
				</el-table-column>
		    <el-table-column
		      fixed
		      type="index"
		      label="序号"
					align="center"
		      width="50">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="姓名"
		      width="150"
					align="center">
		    </el-table-column>
		    <el-table-column
		      prop="username"
		      label="用户名"
		      width="150"
					align="center">
		    </el-table-column>
		    <el-table-column
		      prop="role"
		      label="角色"
		      width="150"
					align="center">
		    </el-table-column>
		    <el-table-column
		      prop="apartment"
		      label="所属部门"
		      width="300"
					align="center">
		    </el-table-column>
		    <el-table-column
		      prop="method"
		      label="数控方式"
		      width="120"
					align="center">
		    </el-table-column>
				<el-table-column
				  prop="time"
				  label="数控开始时间"
				  width="120"
					align="center">
				</el-table-column>
				<el-table-column
				  prop="phone"
				  label="固定电话"
				  width="150"
					align="center">
				</el-table-column>
		  <el-table-column
		    fixed="right"
		    label="操作"
		    width="107"
				align="center">
		    <template slot-scope="scope">
					<el-button
					  type="text"
					  size="small">
					  修改
					</el-button>
		      <el-button
		        @click.native.prevent="deleteRow(scope.$index, tableData)"
		        type="text"
		        size="small">
		        删除
		      </el-button>
					<el-button
						type="text"
						size="small"
						icon="el-icon-s-operation">
					</el-button>
		    </template>
		  </el-table-column>
		</el-table>
		<Pagination @pageChange="pagination" :pw="pagew"></Pagination>
	</div>
</template>

<script>
	import Pagination from "./Pagination.vue"
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
			pagination(val) {
				this.tableData = this.$store.state.categories[val-1]
			}
    },
		components:{
			Pagination
		},
    data() {
      return {
        tableData: this.$store.state.categories[0],
				w: (screen.width-220)+'px',
				pagew: ''
      }
    },
		mounted() {
			this.pagew = (this.$refs.box.offsetWidth-20)+'px'
		}
  }
</script>

<style>
	.box {
		padding: 0 10px;
		background-color: #dae1eb;
		min-width: 800px;
	}
	.box>h4 {
		margin-top: 23px;
		color: #6a6d72;
		margin-bottom: 11px;
		padding-left: 4px;
	}
</style>