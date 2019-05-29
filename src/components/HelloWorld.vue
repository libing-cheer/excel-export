<template>
  <div class="hello">
    {{msg}}
    <div>
      <el-button
        type="primary"
        size="mini"
        style="margin:30px auto;"
        @click="handleDownload"
      >导出</el-button>
      <el-table
        :data="tableData"
        stripe
        style="width: 600px;margin:30px auto;"
      >
        <el-table-column
          prop="date"
          label="日期"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Excel Export',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '李小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '孙小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '赵小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      tableTitleData: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ]
    }
  },
  methods: {
    handleDownload(list, name) {
      let allColumns = this.tableTitleData
      var columnNames = []
      var columnValues = []
      for (var i = 0; i < allColumns.length; i++) {
        columnNames[i] = allColumns[i].label
        columnValues[i] = allColumns[i].prop
      }
      require.ensure([], () => {
        const { export_json_to_excel } = require('vendor/Export2Excel')
        const tHeader = columnNames
        const filterVal = columnValues

        const list = this.tableData
        const data = this.formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, '导出excel列表demo')
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>