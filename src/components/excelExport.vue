<template>
  <div class="hello">
    {{msg}}
    <div>
      <el-button
        type="primary"
        size="mini"
        style="margin:30px auto;"
        @click="handleDownloadData"
      >导出</el-button>
      <el-table
        :data="tableData"
        stripe
        style="width: 600px;margin:30px auto;"
      >
        <el-table-column
          prop="date"
          label="日期"
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="190"
        >
        </el-table-column>

        <el-table-column
          label="个人信息"
          width="180"
          align="center"
        >
          <el-table-column
            prop="age"
            label="年龄"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="height"
            label="身高"
            align="center"
          >
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'excelExport',
  data() {
    return {
      msg: 'Welcome to Your Excel Export',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1510 弄',
          age: 18,
          height: '180cm'
        },
        {
          date: '2016-05-04',
          name: '李小虎',
          address: '上海市普陀区金沙江路 1511 弄',
          age: 18,
          height: '180cm'
        },
        {
          date: '2016-05-01',
          name: '孙小虎',
          address: '上海市普陀区金沙江路 1512 弄',
          age: 18,
          height: '180cm'
        },
        {
          date: '2016-05-02',
          name: '朱小虎',
          address: '上海市普陀区金沙江路 1513 弄',
          age: 18,
          height: '180cm'
        },
        {
          date: '2016-05-04',
          name: '钱小虎',
          address: '上海市普陀区金沙江路 1514 弄',
          age: 18,
          height: '180cm'
        },
        {
          date: '2016-05-01',
          name: '杜小虎',
          address: '上海市普陀区金沙江路 1515 弄',
          age: 18,
          height: '180cm'
        },
        {
          date: '2016-05-03',
          name: '赵小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          age: 18,
          height: '180cm'
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
        },
        {
          label: '年龄',
          prop: 'age'
        },
        {
          label: '身高',
          prop: 'height'
        }
      ]
    }
  },
  methods: {
    handleDownloadData() {
      // 导出表格的表头设置
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